"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const InteractiveTerminal = () => {
    const [isClient, setIsClient] = useState(false);
    const [typedText, setTypedText] = useState("");
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 30, stiffness: 200 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);
    const rotateX = useTransform(smoothY, [-200, 200], [8, -8]);
    const rotateY = useTransform(smoothX, [-200, 200], [-8, 8]);

    const codeLines = [
        { prompt: "~/portfolio", command: "git status", delay: 0 },
        { output: "✓ On branch main", isOutput: true, delay: 800 },
        { output: "✓ Your branch is up to date", isOutput: true, delay: 1200 },
        { prompt: "~/portfolio", command: "npm run build", delay: 2000 },
        { output: "▸ Compiling...", isOutput: true, delay: 2800 },
        { output: "✓ Build completed successfully", isOutput: true, success: true, delay: 3500 },
        { prompt: "~/portfolio", command: "deploy --production", delay: 4500 },
        { output: "Deployed to production!", isOutput: true, success: true, delay: 5500 },
    ];

    useEffect(() => {
        setIsClient(true);

        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                mouseX.set(e.clientX - centerX);
                mouseY.set(e.clientY - centerY);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Typing animation
    useEffect(() => {
        if (!isClient) return;

        const typeNextLine = () => {
            if (currentLineIndex >= codeLines.length) {
                // Reset animation
                setTimeout(() => {
                    setCurrentLineIndex(0);
                    setTypedText("");
                }, 3000);
                return;
            }

            const currentLine = codeLines[currentLineIndex];
            const text = currentLine.command || currentLine.output || "";
            let charIndex = 0;

            if (currentLine.isOutput) {
                // For output lines, show immediately
                setTypedText(text);
                setTimeout(() => {
                    setCurrentLineIndex(prev => prev + 1);
                    setTypedText("");
                }, 600);
            } else {
                // For command lines, type character by character
                const typingInterval = setInterval(() => {
                    if (charIndex <= text.length) {
                        setTypedText(text.slice(0, charIndex));
                        charIndex++;
                    } else {
                        clearInterval(typingInterval);
                        setTimeout(() => {
                            setCurrentLineIndex(prev => prev + 1);
                            setTypedText("");
                        }, 400);
                    }
                }, 50);

                return () => clearInterval(typingInterval);
            }
        };

        const delay = codeLines[currentLineIndex]?.delay || 0;
        const timeoutId = setTimeout(typeNextLine, currentLineIndex === 0 ? 1000 : 200);

        return () => clearTimeout(timeoutId);
    }, [currentLineIndex, isClient]);

    if (!isClient) return null;

    const renderLine = (line: any, index: number) => {
        const isCurrentLine = index === currentLineIndex;
        const isPastLine = index < currentLineIndex;

        if (!isPastLine && !isCurrentLine) return null;

        return (
            <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-center gap-2 font-mono text-sm ${line.isOutput
                    ? line.success
                        ? "text-green-400"
                        : "text-muted-foreground"
                    : "text-foreground"
                    }`}
            >
                {!line.isOutput && (
                    <>
                        <span className="text-primary">{line.prompt}</span>
                        <span className="text-muted-foreground">$</span>
                    </>
                )}
                <span className={line.isOutput ? "pl-4" : ""}>
                    {isPastLine ? (line.command || line.output) : typedText}
                    {isCurrentLine && !line.isOutput && (
                        <motion.span
                            className="inline-block w-2 h-4 bg-primary ml-0.5"
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                        />
                    )}
                </span>
            </motion.div>
        );
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full flex items-center justify-center p-4"
            style={{ perspective: "1000px" }}
        >
            <motion.div
                className="relative w-full max-w-md"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Glow effect behind terminal */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20 blur-2xl rounded-3xl opacity-60" />

                {/* Terminal window */}
                <motion.div
                    className="relative bg-[#1a1b26] border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Terminal header */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1b26] border-b border-white/5">
                        <div className="flex gap-2">
                            <motion.div
                                className="w-3 h-3 rounded-full bg-red-500"
                                whileHover={{ scale: 1.2 }}
                            />
                            <motion.div
                                className="w-3 h-3 rounded-full bg-yellow-500"
                                whileHover={{ scale: 1.2 }}
                            />
                            <motion.div
                                className="w-3 h-3 rounded-full bg-green-500"
                                whileHover={{ scale: 1.2 }}
                            />
                        </div>
                        <span className="flex-1 text-center text-xs text-muted-foreground font-mono">
                            isaac@dev ~ zsh
                        </span>
                    </div>

                    {/* Terminal body */}
                    <div className="p-3 sm:p-4 min-h-[220px] sm:min-h-[280px] space-y-2">
                        {/* Welcome message */}
                        <div className="text-xs text-muted-foreground/50 mb-4 font-mono">
                            Última conexión: {new Date().toLocaleDateString('es-ES')}
                        </div>

                        {/* Code lines */}
                        {codeLines.map((line, index) => renderLine(line, index))}
                    </div>

                    {/* Status bar */}
                    <div className="flex items-center justify-between px-4 py-2 bg-primary/10 border-t border-white/5 text-xs font-mono">
                        <div className="flex items-center gap-2">
                            <motion.div
                                className="w-2 h-2 rounded-full bg-green-500"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="text-green-400">online</span>
                        </div>
                        <span className="text-muted-foreground">UTF-8 | zsh</span>
                    </div>
                </motion.div>

                {/* Floating tech badges - hidden on mobile to avoid overflow */}
                <motion.div
                    className="hidden sm:block absolute -top-4 -right-4 px-3 py-1.5 bg-gradient-to-r from-primary to-purple-500 rounded-full text-xs font-medium text-white shadow-lg"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    TypeScript
                </motion.div>

                <motion.div
                    className="hidden sm:block absolute -bottom-3 -left-3 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-xs font-medium text-white shadow-lg"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                >
                    Node.js
                </motion.div>

                <motion.div
                    className="hidden sm:block absolute top-1/2 -right-6 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-xs font-medium text-white shadow-lg"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                    React
                </motion.div>
            </motion.div>

            {/* Instruction - hidden on mobile */}
            <motion.p
                className="hidden sm:block absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground/40 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
            >
                Mueve el cursor para interactuar
            </motion.p>
        </div>
    );
};

export default InteractiveTerminal;
