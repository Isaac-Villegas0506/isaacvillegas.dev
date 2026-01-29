"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-card/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
                        Mi Camino hasta Aquí
                    </h2>

                    <div className="relative">
                        {/* Horizontal Line (Desktop) / Vertical Line (Mobile) */}
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border/60 md:left-0 md:right-0 md:top-6 md:h-0.5 md:w-full md:bottom-auto" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                            {/* Item 1 */}
                            <motion.div
                                className="relative pl-12 md:pl-0 md:pt-16"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                {/* Dot */}
                                <div className="absolute left-[11px] top-0 w-4 h-4 rounded-full bg-muted-foreground/30 border-4 border-background md:left-1/2 md:-translate-x-1/2 md:top-4 z-10" />

                                <div className="space-y-3 md:text-center">
                                    <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase inline-block bg-card/30 px-2 py-1 rounded">2022</span>
                                    <div className="bg-card border border-border/50 p-6 rounded-xl hover:border-primary/30 transition-colors h-full">
                                        <h3 className="text-lg font-bold text-foreground">Inicio en Ingeniería</h3>
                                        <div className="text-muted-foreground space-y-2 text-sm pt-2">
                                            <p>Inicié estudios con enfoque en IA. Mi primer 'Hello World' y fascinación por la lógica.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Item 2 */}
                            <motion.div
                                className="relative pl-12 md:pl-0 md:pt-16"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                {/* Dot */}
                                <div className="absolute left-[11px] top-0 w-4 h-4 rounded-full bg-muted-foreground/30 border-4 border-background md:left-1/2 md:-translate-x-1/2 md:top-4 z-10" />

                                <div className="space-y-3 md:text-center">
                                    <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase inline-block bg-card/30 px-2 py-1 rounded">2023</span>
                                    <div className="bg-card border border-border/50 p-6 rounded-xl hover:border-primary/30 transition-colors h-full">
                                        <h3 className="text-lg font-bold text-foreground">Formación Intensiva & Hackathons</h3>
                                        <div className="text-muted-foreground space-y-2 text-sm pt-2 text-left md:text-center">
                                            <p className="md:justify-center">1000+ horas de código</p>
                                            <p className="md:justify-center">3er lugar en Hackathon 🏆</p>
                                            <p className="text-xs italic pt-2 opacity-80">"Descubrí que programar es resolver problemas reales."</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Item 3 */}
                            <motion.div
                                className="relative pl-12 md:pl-0 md:pt-16"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                {/* Dot - Active */}
                                <div className="absolute left-[11px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background md:left-1/2 md:-translate-x-1/2 md:top-4 z-10 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />

                                <div className="space-y-3 md:text-center">
                                    <span className="text-sm font-semibold text-primary tracking-wider uppercase inline-block bg-primary/10 px-2 py-1 rounded">2024 - Presente</span>
                                    <div className="bg-card border border-primary/20 p-6 rounded-xl shadow-lg shadow-primary/5 h-full relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-primary md:w-full md:h-1" />
                                        <h3 className="text-lg font-bold text-foreground">Software Engineer Junior</h3>
                                        <div className="text-muted-foreground space-y-2 text-sm pt-2 text-left">
                                            <p className="flex gap-2"><ChevronRight size={16} className="text-primary shrink-0 mt-0.5" /> 10+ proyectos full stack</p>
                                            <p className="flex gap-2"><ChevronRight size={16} className="text-primary shrink-0 mt-0.5" /> Automatización con Python</p>
                                            <p className="flex gap-2"><ChevronRight size={16} className="text-primary shrink-0 mt-0.5" /> Diseño de SQL complejo</p>
                                        </div>
                                        <p className="text-xs italic text-foreground/60 pt-3 mt-2 border-t border-border/50">
                                            "Buscando desafíos de escala."
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
