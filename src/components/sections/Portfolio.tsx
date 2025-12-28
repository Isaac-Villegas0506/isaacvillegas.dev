"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github, Code2, Server, Globe } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

type Category = "Todos" | "Frontend" | "Backend" | "Fullstack" | "Donde más aprendí";

const projects = [
    {
        id: 1,
        title: "Sistema de Email Marketing Automated",
        category: ["Backend", "Fullstack", "Donde más aprendí"],
        status: "En producción",
        image: "img/emailflow.png",
        context: "Necesitaba enviar 10k+ emails/hora sin pagar servicios costosos.",
        stack: ["Laravel", "MySQL", "Python", "Redis"],
        learning: "Primera vez diseñando un sistema de colas complejo. Aprendí a manejar rate limits y optimizar queries de 5s a 200ms.",
        links: { demo: "https://emailflow.joyshop.shop/", code: "#" },
    },
    {
        id: 2,
        title: "Bot de Automatización Multi-Plataforma",
        category: ["Backend", "Automatización"],
        status: "Entregado",
        image: "/placeholder-project-2.jpg",
        context: "Automatizar la recolección de leads de 5 fuentes diferentes.",
        stack: ["Python", "Node.js", "PostgreSQL", "GitHub Actions"],
        learning: "Manejo de rate limits de APIs y transformación de datos heterogéneos. Error handling fue el 40% del código.",
        links: { demo: "#", code: "#" },
    },
    {
        id: 3,
        title: "Dashboard Colaborativo Real-Time",
        category: ["Frontend", "Fullstack"],
        status: "Experimento personal",
        image: "/placeholder-project-3.jpg",
        context: "Quería entender cómo funcionan los WebSockets realmente.",
        stack: ["React", "Vite", "Node.js", "Socket.io"],
        learning: "Descubrí Real-time. Implementé normalización de datos en frontend para evitar re-renders innecesarios.",
        links: { demo: "#", code: "#" },
    },
    {
        id: 4,
        title: "Plataforma de Integración de APIs",
        category: ["Backend", "Donde más aprendí"],
        status: "En producción",
        image: "/placeholder-project-4.jpg",
        context: "Unificar 8 servicios externos (Stripe, Twilio, etc) en una sola API.",
        stack: ["Node.js", "Laravel", "MySQL", "Redis"],
        learning: "Cada API es un mundo. Implementé un sistema de caché inteligente que redujo llamadas externas en 60%.",
        links: { demo: "#", code: "#" },
    },
    {
        id: 5,
        title: "E-commerce con Pasarela de Pago",
        category: ["Fullstack", "Frontend"],
        status: "Entregado",
        image: "/placeholder-project-5.jpg",
        context: "Cliente necesitaba cobros recurrentes y carrito persistente.",
        stack: ["React", "Laravel", "Stripe API", "MySQL"],
        learning: "Manejo de dinero real. Webhooks de Stripe y transacciones SQL con rollback para evitar inconsistencias.",
        links: { demo: "#", code: "#" },
    },
    {
        id: 6,
        title: "Sistema de Tickets con IA",
        category: ["Backend", "Automatización"],
        status: "Experimento personal",
        image: "/placeholder-project-6.jpg",
        context: "Clasificar emails de soporte automáticamente por urgencia.",
        stack: ["Python", "Gmail API", "MySQL", "NLP Basic"],
        learning: "Leer documentación extensa (Gmail API). Implementé clasificación automática que ahorra horas de triage.",
        links: { demo: "#", code: "#" },
    },
];

const Portfolio = () => {
    const [filter, setFilter] = useState<Category>("Todos");

    const filteredProjects = projects.filter((p) =>
        filter === "Todos" ? true : p.category.includes(filter)
    );

    return (
        <section id="projects" className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Mi Evolución a través del Código
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Cada proyecto ha sido un escalón en mi aprendizaje. Aquí no solo verás qué construí, sino qué aprendí.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {["Todos", "Frontend", "Backend", "Fullstack", "Donde más aprendí"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat as Category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                                : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
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
                            className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full hover-lift"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.6,
                                    }
                                },
                            }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Image Placeholder */}
                            <div className="relative h-48 bg-secondary/30 overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center text-muted-foreground/30"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Code2 size={48} />
                                </motion.div>

                                {/* Animated gradient overlay on hover */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />

                                {/* Overlay Status */}
                                <div className="absolute top-3 right-3">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                    >
                                        <Badge variant={project.status === "En producción" ? "default" : "secondary"} className="backdrop-blur-md bg-background/80 hover-glow">
                                            {project.status}
                                        </Badge>
                                    </motion.div>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow space-y-4">
                                <div>
                                    <motion.h3
                                        className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.stack.slice(0, 3).map((tech, techIndex) => (
                                            <motion.span
                                                key={tech}
                                                className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-md hover-scale cursor-default"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.3 + index * 0.1 + techIndex * 0.05 }}
                                                whileHover={{ scale: 1.1, y: -2 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                        {project.stack.length > 3 && (
                                            <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-md">+{project.stack.length - 3}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-3 flex-grow">
                                    <motion.div
                                        className="p-3 bg-secondary/20 rounded-lg"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1">Por qué lo hice</p>
                                        <p className="text-sm text-dimmed-foreground">{project.context}</p>
                                    </motion.div>

                                    <div>
                                        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Aprendizaje clave</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{project.learning}</p>
                                    </div>
                                </div>

                                <div className="pt-4 mt-auto border-t border-border flex gap-3">
                                    <motion.a
                                        href={project.links.demo}
                                        className="flex-1 flex items-center justify-center gap-2 text-sm font-medium py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Globe size={16} /> Demo
                                    </motion.a>
                                    <motion.a
                                        href={project.links.code}
                                        className="flex-1 flex items-center justify-center gap-2 text-sm font-medium py-2 rounded-lg border border-border hover:bg-secondary transition-colors text-foreground"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Github size={16} /> Code
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-16 text-center">
                    <Button variant="outline" size="lg" className="gap-2">
                        <Github size={18} /> Explorar +15 proyectos en GitHub
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
