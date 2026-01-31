"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Github, Code2, Globe, Layers, ArrowUpRight, ArrowRight, LayoutTemplate } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "Todos" | "Frontend" | "Backend" | "Fullstack" | "Donde más aprendí";

// Helper for Simple Icons (CDN)
const getTechIcon = (tech: string) => {
    const slugMap: Record<string, string> = {
        "Laravel 11": "laravel",
        "Laravel": "laravel",
        "Alpine.js": "alpinedotjs",
        "Redis": "redis",
        "TailwindCSS": "tailwindcss",
        "React": "react",
        "TypeScript": "typescript",
        "Zustand": "nodedotjs", // Fallback or proxy
        "Next.js": "nextdotjs",
        "Node.js": "nodedotjs",
        "Jobs & Queues": "amazonsqs"
    };

    const techLower = tech.split(" ")[0].toLowerCase();
    const slug = slugMap[tech] || slugMap[techLower] || techLower;

    // Fallback URL or generic icon handling could go here, but strict mapping is safer for CDNs
    return `https://cdn.simpleicons.org/${slug}`;
};

const projects = [
    {
        id: 1,
        title: "Email Marketing System",
        image: "/projects/Email Marketing.png",
        category: ["Backend", "Fullstack", "Donde más aprendí"],
        status: "Demo Interactiva",
        description: "Simulador de alto rendimiento para envío masivo de correos. Arquitectura asíncrona basada en Event-Driven Design, gestionando colas de procesamiento (Jobs) y fallos SMTP en tiempo real sin bloquear la interfaz del usuario.",
        stack: ["Laravel 11", "Alpine.js", "Redis", "TailwindCSS"],
        links: { demo: "http://email.ivillegas.site/", code: "https://github.com/Isaac-Villegas0506/Sistema-de-Email-Marketing-Automatizado" },
    },
    {
        id: 2,
        title: "DB Canvas (Visual Database Designer)",
        image: "/projects/db_canvas.png",
        category: ["Frontend", "Fullstack", "Donde más aprendí"],
        status: "Demo Interactiva",
        description: "Motor de diagramación de bases de datos que exporta a SQL. Construido con un sistema de gestión de estado atómico (Zustand) para manipular nodos y conexiones con rendimiento nativo (60fps) incluso en móviles.",
        stack: ["React", "TypeScript", "Zustand", "TailwindCSS"],
        links: { demo: "https://dbcanvas.ivillegas.site", code: "https://github.com/Isaac-Villegas0506/db-canvas" },
    },
];

const Portfolio = () => {
    const [filter, setFilter] = useState<Category>("Todos");

    const filteredProjects = projects.filter((p) =>
        filter === "Todos" ? true : p.category.includes(filter)
    );

    return (
        <section id="projects" className="py-24 bg-background relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/40 border border-border/60 text-xs font-semibold text-muted-foreground backdrop-blur-md"
                    >
                        <LayoutTemplate size={14} className="text-primary" />
                        <span>Portafolio</span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 tracking-tight"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Ingeniería y Diseño
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Experiencias digitales optimizadas, desde el núcleo hasta el píxel.
                    </motion.p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-14">
                    {["Todos", "Frontend", "Backend", "Fullstack", "Donde más aprendí"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat as Category)}
                            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 relative overflow-hidden ${filter === cat
                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 ring-2 ring-primary/20 scale-105"
                                : "bg-card border border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-secondary/40"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Compact Grid with 3 columns support */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group flex flex-col h-full bg-card/40 backdrop-blur-md border border-white/5 hover:border-primary/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                            >
                                {/* Image Container */}
                                <div className="relative h-48 w-full overflow-hidden bg-zinc-900/50">
                                    <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-500" />

                                    {project.image ? (
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover object-top"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.7, ease: "easeOut" }}
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                                            <Layers size={48} strokeWidth={1} />
                                        </div>
                                    )}

                                    {/* Floating Status Badge */}
                                    <div className="absolute top-3 right-3 z-20">
                                        <Badge className="bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-lg text-[10px] uppercase tracking-wider font-bold px-2 py-1">
                                            {project.status === "Demo Interactiva" && (
                                                <span className="mr-1.5 w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
                                            )}
                                            {project.status.replace("Demo ", "")}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-grow relative">
                                    <div className="mb-3">
                                        <div className="flex items-start justify-between gap-4 mb-2">
                                            <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <motion.a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1, rotate: 45 }}
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                <ArrowUpRight size={18} />
                                            </motion.a>
                                        </div>

                                        {/* Full Description with no clamp */}
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack with Icons */}
                                    <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-4 border-t border-border/30">
                                        {project.stack.map((tech) => (
                                            <div
                                                key={tech}
                                                className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-medium bg-secondary/50 text-secondary-foreground border border-border/50 transition-colors hover:bg-secondary hover:border-primary/20"
                                                title={tech}
                                            >
                                                <img
                                                    src={getTechIcon(tech)}
                                                    alt=""
                                                    className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).style.display = 'none';
                                                    }}
                                                />
                                                <span>{tech}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-3">
                                        <motion.a
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg bg-primary text-primary-foreground text-xs font-semibold shadow-md shadow-primary/20 hover:bg-primary/90 transition-all"
                                        >
                                            <Globe size={14} />
                                            Live Demo
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            href={project.links.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg border border-border/60 bg-secondary/30 text-secondary-foreground text-xs font-semibold hover:bg-secondary/60 hover:border-primary/30 transition-all"
                                        >
                                            <Github size={14} />
                                            Code
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-16 text-center">
                    <Button
                        variant="ghost"
                        className="group text-muted-foreground hover:text-foreground"
                        onClick={() => window.open("https://github.com/Isaac-Villegas0506", "_blank")}
                    >
                        Ver más proyectos en GitHub
                        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
