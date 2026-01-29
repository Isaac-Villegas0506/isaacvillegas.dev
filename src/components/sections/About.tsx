"use client";

import { BookOpen, Users, Flag, Briefcase, Code, Database, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-16">

                    {/* Section Header */}
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                            Mi Camino en el Desarrollo Web
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            De aprendiz curioso a constructor de soluciones.
                        </p>
                    </div>

                    {/* 1. Origin */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold flex items-center gap-2">
                            <span className="p-2 bg-primary/10 rounded-lg text-primary"><BookOpen size={20} /></span>
                            Cómo empezó todo
                        </h3>
                        <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                            <p>
                                Todo empezó una tarde de estudio y frustración. Tenía que repetir un proceso aburrido durante horas, así que decidí intentar algo distinto: hacer que la máquina lo hiciera por mí.
                                Escribí un pequeño script en Python y, cuando funcionó, entendí que programar no era solo escribir código… era resolver problemas.

                            </p>
                            <p className="mt-4">
                                Esa experiencia me llevó a estudiar Ingeniería de Software, donde hoy combino lógica, diseño y tecnología para construir aplicaciones útiles y duraderas.
                            </p>
                        </div>
                    </div>



                    {/* 3. Stats */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-y border-border/50 py-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                        }}
                    >
                        {[
                            { value: "5+", label: "Meses de experiencia" },
                            { value: "1+", label: "Proyectos de aprendizaje" },
                            { value: "12+", label: "Tecnologías Dominadas" },
                            { value: "4+", label: "Code contributions" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="text-center space-y-1 hover-scale cursor-default"
                                variants={{
                                    hidden: { opacity: 0, scale: 0.5 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                                whileHover={{ scale: 1.1, y: -5 }}
                            >
                                <motion.div
                                    className="text-4xl font-bold text-foreground"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>



                </div>
            </div>
        </section>
    );
};

export default About;
