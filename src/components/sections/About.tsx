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
                                Todo comenzó por frustración. Mientras estudiaba, noté cuántas tareas repetitivas consumían mi tiempo.
                                Mi primer "programa" real fue un script de Python para automatizar un proceso de copy-paste que me tomaba 5 horas semanales.
                                Ver esa terminal ejecutarse sola por primera vez fue mágico.
                            </p>
                            <p className="mt-4">
                                Decidí estudiar Ingeniería de Software para entender no solo cómo escribir código, sino cómo diseñar sistemas.
                                Hoy, combino esa base de ingeniería con la agilidad del desarrollo web moderno para crear aplicaciones que no solo funcionan,
                                sino que perduran.
                            </p>
                        </div>
                    </div>

                    {/* 2. Philosophy */}
                    <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Code size={120} />
                        </div>

                        <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-8 border-l-4 border-primary pl-6 py-2">
                            "El mejor código no es el más ingenioso, es el que mi equipo puede entender, mantener y construir encima dentro de 6 meses."
                        </blockquote>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <h4 className="font-semibold text-foreground flex items-center gap-2">
                                    <BookOpen size={16} className="text-primary" /> Aprendizaje perpetuo
                                </h4>
                                <p className="text-sm text-muted-foreground">Cada bug es una lección, cada code review un master class.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-foreground flex items-center gap-2">
                                    <Users size={16} className="text-primary" /> Mentalidad de equipo
                                </h4>
                                <p className="text-sm text-muted-foreground">El éxito individual es temporal, el éxito colectivo es legado.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-foreground flex items-center gap-2">
                                    <Flag size={16} className="text-primary" /> Ownership total
                                </h4>
                                <p className="text-sm text-muted-foreground">No escribo código para 'salir del paso', lo escribo para que perdure.</p>
                            </div>
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
                            { value: "24+", label: "Meses de experiencia" },
                            { value: "10+", label: "Proyectos de aprendizaje" },
                            { value: "12+", label: "Tecnologías Dominadas" },
                            { value: "50+", label: "Code contributions" },
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

                    {/* 4. What I seek */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold flex items-center gap-2">
                            <span className="p-2 bg-primary/10 rounded-lg text-primary"><Briefcase size={20} /></span>
                            Qué busco en un equipo
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: <Zap size={20} />, title: "Cultura de aprendizaje", desc: "Equipos que invierten en su gente" },
                                { icon: <Code size={20} />, title: "Proyectos con impacto", desc: "Código que resuelve problemas reales" },
                                { icon: <Users size={20} />, title: "Mentores accesibles", desc: "Seniors que disfrutan enseñar" },
                                { icon: <Flag size={20} />, title: "Visión a largo plazo", desc: "Empresas construyendo, no solo 'shippeando'" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/50 hover:bg-card transition-colors">
                                    <div className="shrink-0 p-2 bg-secondary rounded-lg text-foreground">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-foreground">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
