"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Download, Github, Linkedin, Terminal, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <section
            id="hero"
            className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden"
        >
            {/* Animated Background decoration */}
            <motion.div
                className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-0 left-0 -z-10 w-[30%] h-[30%] bg-secondary/20 blur-[100px] rounded-full pointer-events-none"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Gradient mesh background */}
            <div className="absolute inset-0 -z-20 gradient-mesh opacity-50" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Column (60%) */}
                    <motion.div
                        className="lg:col-span-7 flex flex-col items-start space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-sm font-medium text-secondary-foreground hover-glow cursor-default"
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            >
                                <Terminal size={14} className="text-primary" />
                            </motion.div>
                            <span>Software Engineering Student | AI Enthusiast</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.div variants={itemVariants} className="space-y-2">
                            <motion.h2
                                className="text-xl md:text-2xl font-medium text-muted-foreground"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                Hola, soy
                            </motion.h2>
                            <motion.h1
                                className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                            >
                                <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                                    Isaac Villegas
                                </span>
                            </motion.h1>
                            <motion.h3
                                className="text-2xl md:text-3xl font-semibold text-foreground/90 pt-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                Estudiante de Ingeniería de Software con IA <br className="hidden md:block" /> |{" "}
                                <span className="text-primary">Desarrollador Web Junior</span>
                            </motion.h3>
                            <motion.p
                                className="text-lg md:text-xl text-muted-foreground font-medium pt-1"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                Combinando fundamentos de ingeniería con desarrollo web moderno
                            </motion.p>
                        </motion.div>

                        {/* Paragraph */}
                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
                        >
                            Estudio Ingeniería de Software con especialización en Inteligencia
                            Artificial, pero mi pasión diaria es el Desarrollo de Software. No busco
                            proyectos cortos. Busco un equipo donde pueda aportar mis
                            fundamentos técnicos desde el día 1, aprender de profesionales
                            experimentados y construir una carrera de largo plazo.
                        </motion.p>

                        {/* Tech Stack Pills */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-2 pt-2"
                        >
                            {[
                                "React + Vite",
                                "JavaScript ES6+",
                                "Node.js",
                                "Laravel",
                                "Python",
                                "SQL",
                                "Git",
                            ].map((tech, index) => (
                                <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                >
                                    <Badge variant="secondary" className="px-3 py-1 text-sm bg-secondary/50 backdrop-blur-sm border-secondary-foreground/10 hover-glow cursor-default">
                                        {tech}
                                    </Badge>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button size="lg" className="rounded-full text-base px-8 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover-glow">
                                    Ver mi evolución <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button size="lg" variant="outline" className="rounded-full text-base px-8 border-foreground/20 hover:bg-foreground/5">
                                    Conozcamos más
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button size="lg" variant="ghost" className="rounded-full text-base px-6 text-muted-foreground hover:text-foreground">
                                    <Download className="mr-2 h-4 w-4" /> CV Completo
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Social */}
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-4 pt-4 border-t border-border/40 w-full max-w-md"
                        >
                            <span className="text-sm text-muted-foreground">Encuéntrame en:</span>
                            <motion.a
                                href="https://github.com/isaacvillegas"
                                target="_blank"
                                className="p-2 hover:bg-secondary rounded-full transition-colors text-muted-foreground hover:text-foreground"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Github size={20} />
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/isaacvillegas"
                                target="_blank"
                                className="p-2 hover:bg-secondary rounded-full transition-colors text-muted-foreground hover:text-foreground"
                                whileHover={{ scale: 1.2, rotate: -5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Linkedin size={20} />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column (40%) */}
                    <motion.div
                        className="lg:col-span-5 relative flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <motion.div
                            className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-card hover-lift"
                            variants={floatingVariants}
                            animate="animate"
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Placeholder for image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-card to-background flex flex-col items-center justify-center text-muted-foreground p-8 text-center space-y-4">
                                <motion.div
                                    className="w-24 h-24 rounded-full bg-secondary/50 flex items-center justify-center mb-4"
                                    animate={{
                                        boxShadow: [
                                            "0 0 20px rgba(37, 99, 235, 0.3)",
                                            "0 0 40px rgba(37, 99, 235, 0.6)",
                                            "0 0 20px rgba(37, 99, 235, 0.3)"
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Terminal size={48} className="text-primary/50" />
                                </motion.div>
                                <p className="text-sm">
                                    [Isaac's Photo Placeholder]
                                </p>
                                <p className="text-xs max-w-[200px] opacity-70">
                                    Replace this with a professional photo with neutral background in public/images folder.
                                </p>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />

                            {/* Animated border glow */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl"
                                animate={{
                                    boxShadow: [
                                        "0 0 20px rgba(37, 99, 235, 0.2)",
                                        "0 0 40px rgba(139, 92, 246, 0.3)",
                                        "0 0 20px rgba(37, 99, 235, 0.2)"
                                    ]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                        </motion.div>

                        {/* Floating Cards (Optional decoration) */}
                        <motion.div
                            className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-xl shadow-xl hidden md:block glass"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    className="h-2 w-2 rounded-full bg-green-500"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [1, 0.7, 1]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <span className="text-sm font-medium">Available for long-term roles</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
