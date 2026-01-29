"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Github, Code2, Globe, Layers, ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type Category = "Todos" | "Frontend" | "Backend" | "Fullstack" | "Donde más aprendí";

const projects = [
    {
        id: 1,
        title: "Sistema de Email Marketing Automated",
        category: ["Backend", "Fullstack", "Donde más aprendí"],
        status: "En producción",
        context: "Necesitaba enviar 10k+ emails/hora sin pagar servicios costosos.",
        stack: ["Laravel", "MySQL", "Python", "Redis"],
        learning: "Primera vez diseñando un sistema de colas complejo. Aprendí a manejar rate limits y optimizar queries de 5s a 200ms.",
        links: { demo: "https://emailflow.joyshop.shop/", code: "#" },
    },
];

const Portfolio = () => {
    const [filter, setFilter] = useState<Category>("Todos");

    const filteredProjects = projects.filter((p) =>
        filter === "Todos" ? true : p.category.includes(filter)
    );

    return (
        <section id="projects" className="py-24 bg-background relative">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none opacity-30" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-xs font-medium text-muted-foreground mb-2"
                    >
                        <Code2 size={14} /> Proyectos Destacados
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Ingeniería en Acción
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Cada línea de código aquí resuelve un problema real. No son solo proyectos, son soluciones.
                    </motion.p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {["Todos", "Frontend", "Backend", "Fullstack", "Donde más aprendí"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat as Category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${filter === cat
                                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                                : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
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
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group flex flex-col h-full bg-card border border-border/50 hover:border-primary/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Abstract Project Cover */}
                            <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-secondary/50 to-background border-b border-border/50 group-hover:from-primary/10 group-hover:to-background transition-colors duration-500">
                                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                    <Layers size={80} strokeWidth={1} />
                                </div>

                                <div className="absolute top-4 right-4">
                                    <Badge variant={project.status === "En producción" ? "default" : "secondary"} className="backdrop-blur-md bg-background/50 hover:bg-background/80 shadow-sm">
                                        {project.status === "En producción" && <span className="mr-1.5 inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />}
                                        {project.status}
                                    </Badge>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto pb-1 no-scrollbar mask-gradient">
                                    {project.stack.map(tech => (
                                        <Badge key={tech} variant="secondary" className="text-[10px] bg-background/80 backdrop-blur border text-foreground/80 font-medium whitespace-nowrap">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors flex items-center justify-between">
                                    {project.title}
                                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </h3>

                                <div className="space-y-4 mb-6 flex-grow">
                                    <div className="bg-secondary/20 p-3 rounded-lg border border-border/30">
                                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">El Desafío</p>
                                        <p className="text-sm text-foreground/80">{project.context}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Solución & Aprendizaje</p>
                                        <p className="text-sm text-muted-foreground">{project.learning}</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 pt-4 border-t border-border/50 mt-auto">
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 text-sm font-medium py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
                                    >
                                        <Globe size={16} /> Ver Demo
                                    </a>
                                    <a
                                        href={project.links.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 text-sm font-medium py-2.5 rounded-xl border border-border hover:border-foreground/20 hover:bg-secondary text-foreground transition-all active:scale-95"
                                    >
                                        <Github size={16} /> Código
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-20 text-center">
                    <Button
                        variant="ghost"
                        size="lg"
                        className="group gap-2 hover:bg-transparent"
                        onClick={() => window.open("https://github.com/Isaac-Villegas0506", "_blank")}
                    >
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">Explorar más repositorios en GitHub</span>
                        <ArrowRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
