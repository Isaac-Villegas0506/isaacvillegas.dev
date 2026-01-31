"use client";

import { Code, Server, Bot, Database as DbIcon, GitBranch, Cpu, Globe, Layers } from "lucide-react";
import { motion } from "framer-motion";

interface SkillSection {
    category: string;
    icon: React.ReactNode;
    color: string;
    skills: string[];
    description: string;
}

// Helper to get brand icons
const getTechIcon = (tech: string): string | null => {
    const slugMap: Record<string, string> = {
        "React": "react",
        "TypeScript": "typescript",
        "Tailwind CSS": "tailwindcss",
        "Framer Motion": "framer",
        "Vite": "vite",
        "Next.js": "nextdotjs/white",
        "Node.js": "nodedotjs",
        "Express": "express/white",
        "Laravel": "laravel",
        "PHP": "php",
        "MySQL": "mysql",
        "PostgreSQL": "postgresql",
        "Redis": "redis",
        "Python": "python",
        "Git": "git",
        "GitHub Actions": "githubactions/white",
        "Docker": "docker",
        "Linux": "linux",
        // Extras
        "HTML5": "html5",
        "CSS3": "css3",
        "JavaScript": "javascript",
        "Sass": "sass",
        "Bootstrap": "bootstrap",
        "Alpine.js": "alpinedotjs",
    };

    const techLower = tech.toLowerCase();

    // Check direct map
    if (slugMap[tech]) return `https://cdn.simpleicons.org/${slugMap[tech]}`;

    // Check key includes
    const foundKey = Object.keys(slugMap).find(key => tech.includes(key));
    if (foundKey) return `https://cdn.simpleicons.org/${slugMap[foundKey]}`;

    return null; // No icon found
};

const Skills = () => {
    const skillSections: SkillSection[] = [
        {
            category: "Frontend y UI",
            icon: <Globe size={24} />,
            color: "text-blue-400",
            skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Next.js"],
            description: "Creando interfaces fluidas, responsivas y accesibles con enfoque en UX."
        },
        {
            category: "Ingeniería Backend",
            icon: <Server size={24} />,
            color: "text-green-400",
            skills: ["Node.js", "Express", "Laravel", "PHP", "REST APIs", "Auth"],
            description: "Arquitecturas robustas, escalables y seguras para soportar lógica compleja."
        },
        {
            category: "Datos y Almacenamiento",
            icon: <DbIcon size={24} />,
            color: "text-yellow-400",
            skills: ["MySQL", "PostgreSQL", "Redis", "Optimización SQL", "Modelado de Datos"],
            description: "Diseño de esquemas eficientes y manipulación de datos de alto rendimiento."
        },
        {
            category: "Automatización e IA",
            icon: <Bot size={24} />,
            color: "text-purple-400",
            skills: ["Python", "Web Scraping", "Scripting", "Prompt Engineering", "ETL"],
            description: "Automatización de procesos repetitivos e integración de soluciones inteligentes."
        },
        {
            category: "DevOps y Herramientas",
            icon: <GitBranch size={24} />,
            color: "text-orange-400",
            skills: ["Git", "GitHub Actions", "Docker", "Linux", "CI/CD Básico"],
            description: "Flujos de trabajo modernos para integración y despliegue continuo."
        },
        {
            category: "Habilidades Blandas",
            icon: <Cpu size={24} />,
            color: "text-pink-400",
            skills: ["Resolución de Problemas", "Comunicación Técnica", "Trabajo en Equipo", "Aprendizaje Ágil"],
            description: "Porque el código es importante, pero la colaboración es esencial."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="skills" className="py-24 bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none opacity-50" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none opacity-50" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-xs font-medium text-muted-foreground mb-4"
                    >
                        <Layers size={14} /> Stack Tecnológico
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Arsenal de Ingeniería
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Más que herramientas, domino conceptos. Selecciono la tecnología adecuada para cada problema.
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {skillSections.map((section, index) => (
                        <motion.div
                            key={section.category}
                            variants={itemVariants}
                            className="group relative bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-background border border-border/50 ${section.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                    {section.icon}
                                </div>
                                <div className="text-xs font-mono text-muted-foreground/50">0{index + 1}</div>
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                {section.category}
                            </h3>

                            <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                                {section.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {section.skills.map(skill => {
                                    const iconUrl = getTechIcon(skill);
                                    return (
                                        <div
                                            key={skill}
                                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-secondary/40 text-secondary-foreground border border-border/50 text-xs font-medium hover:bg-secondary/80 transition-colors"
                                        >
                                            {iconUrl && (
                                                <img
                                                    src={iconUrl}
                                                    alt=""
                                                    className="w-3.5 h-3.5 opacity-80"
                                                    onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                                                />
                                            )}
                                            {skill}
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;
