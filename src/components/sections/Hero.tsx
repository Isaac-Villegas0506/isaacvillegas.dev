"use client";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import the interactive component to avoid SSR issues with Three.js
// Dynamically import the interactive component to avoid SSR issues with Three.js
const InteractiveGlobe = dynamic(() => import("@/components/ui/InteractiveGlobe"), { ssr: false });

// Helper to get brand icons
const getTechIcon = (tech: string): string | null => {
    const slugMap: Record<string, string> = {
        "React + Vite": "react", // Main tech
        "JavaScript ES6+": "javascript",
        "Node.js": "nodedotjs",
        "Laravel": "laravel",
        "Python": "python",
        "SQL": "mysql", // Representative icon
        "Git": "git",
    };

    return slugMap[tech] ? `https://cdn.simpleicons.org/${slugMap[tech]}` : null;
};

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background via-background to-background/50" />



            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Content */}
                    <div className="flex flex-col items-start text-left space-y-8">

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/30 border border-white/5 text-sm font-medium text-muted-foreground backdrop-blur-md"
                        >
                            <Terminal size={12} className="text-primary" />
                            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                                Estudiante de Ingeniería de Software  </span>
                        </motion.div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <motion.h1
                                className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground leading-[1.1]"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                            >
                                Construyendo
                                <br />
                                <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    Software Escalable
                                </span>
                            </motion.h1>

                            <motion.p
                                className="text-xl text-muted-foreground max-w-lg font-light leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                Ingeniero de Software Junior fusionando fundamentos sólidos con desarrollo web moderno.
                                No solo escribo código; diseño soluciones duraderas.
                            </motion.p>
                        </div>

                        {/* Tech Stack Pills - Left Aligned */}
                        {/* Tech Stack Pills - Left Aligned */}
                        <motion.div
                            className="flex flex-wrap justify-start gap-3 pt-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            {[
                                "React + Vite",
                                "JavaScript ES6+",
                                "Node.js",
                                "Laravel",
                                "Python",
                                "SQL",
                                "Git",
                            ].map((tech) => {
                                const icon = getTechIcon(tech);
                                return (
                                    <motion.div
                                        key={tech}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="cursor-default"
                                    >
                                        <Badge variant="secondary" className="px-3 py-1.5 text-sm bg-secondary/40 backdrop-blur-sm border-white/5 hover:border-primary/20 hover:bg-secondary/60 transition-all font-normal text-muted-foreground hover:text-foreground flex items-center gap-2">
                                            {icon && (
                                                <img
                                                    src={icon}
                                                    alt=""
                                                    className="w-4 h-4 opacity-70"
                                                    onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                                                />
                                            )}
                                            {tech}
                                        </Badge>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* CTAs - Left Aligned */}
                        <motion.div
                            className="flex flex-wrap gap-4 pt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center gap-2"
                            >
                                Ver Proyectos <ArrowRight size={16} />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="h-12 px-8 rounded-full border border-border bg-background/50 hover:bg-secondary/50 backdrop-blur-sm text-foreground font-medium transition-all flex items-center gap-2"
                            >
                                <Download size={16} /> Descargar CV
                            </motion.button>
                        </motion.div>

                    </div>

                    {/* Right Column: Interactive Element (visible en todas las pantallas) */}
                    <div className="flex relative h-[400px] lg:h-[500px] items-center justify-center mt-8 lg:mt-0">
                        <InteractiveGlobe />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
