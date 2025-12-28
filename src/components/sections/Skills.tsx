"use client";

import { Star, Code, Server, Bot, Database as DbIcon, Terminal } from "lucide-react";
import { motion } from "framer-motion";

interface SkillCardProps {
    category: string;
    icon: React.ReactNode;
    skills: { name: string; stars: number; desc: string }[];
    index: number;
}

const SkillCard = ({ category, icon, skills, index }: SkillCardProps) => (
    <motion.div
        className="bg-card border border-border hover:border-primary/50 transition-all duration-300 rounded-xl p-6 space-y-6 hover-lift hover-glow"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ y: -5 }}
    >
        <div className="flex items-center gap-3 border-b border-border/50 pb-4">
            <motion.div
                className="p-2 bg-primary/10 rounded-lg text-primary"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
            >
                {icon}
            </motion.div>
            <h3 className="font-semibold text-lg text-foreground">{category}</h3>
        </div>
        <div className="space-y-5">
            {skills.map((skill, skillIndex) => (
                <motion.div
                    key={skill.name}
                    className="space-y-1.5"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                >
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-sm text-foreground">{skill.name}</span>
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + skillIndex * 0.05 + i * 0.03 }}
                                    whileHover={{ scale: 1.2, rotate: 72 }}
                                >
                                    <Star
                                        size={12}
                                        className={i < skill.stars ? "fill-primary text-primary" : "fill-muted text-muted"}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{skill.desc}</p>
                </motion.div>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const coreSkills = [
        {
            category: "Frontend",
            icon: <Code size={20} />,
            skills: [
                { name: "React + Vite", stars: 5, desc: "SPAs complejas, hooks, optimización" },
                { name: "JavaScript ES6+", stars: 5, desc: "Async/await, funcional, DOM" },
                { name: "HTML5/CSS3", stars: 5, desc: "Semántico, Flexbox, Grid" },
                { name: "Tailwind CSS", stars: 4, desc: "Utility-first design systems" },
            ],
        },
        {
            category: "Backend & APIs",
            icon: <Server size={20} />,
            skills: [
                { name: "Node.js/Express", stars: 5, desc: "REST APIs, Middleware, Auth" },
                { name: "Laravel/PHP", stars: 5, desc: "MVC, Eloquent, Queues" },
                { name: "API Design", stars: 5, desc: "RESTful standards, Docs" },
            ],
        },
        {
            category: "Automatización",
            icon: <Bot size={20} />,
            skills: [
                { name: "Python", stars: 5, desc: "Scripts, ETL, Data processing" },
                { name: "Web Scraping", stars: 4, desc: "Selenium, BeautifulSoup" },
                { name: "Task Automation", stars: 4, desc: "Cron jobs, Bash custom scripts" },
            ],
        },
        {
            category: "Bases de Datos & Tools",
            icon: <DbIcon size={20} />,
            skills: [
                { name: "MySQL / SQL", stars: 5, desc: "Complex joins, indexing" },
                { name: "PostgreSQL", stars: 4, desc: "JSONB, Advanced features" },
                { name: "Git / GitHub", stars: 5, desc: "Flows colaborativos, CI/CD basic" },
            ],
        },
    ];

    return (
        <section id="skills" className="py-24 bg-background border-t border-border/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Mis Herramientas
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Mi formación en Ingeniería de Software me da los fundamentos. Mi práctica diaria me da la agilidad.
                    </p>
                </div>

                {/* Section A: Core Techs */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {coreSkills.map((section, index) => (
                        <SkillCard key={section.category} {...section} index={index} />
                    ))}
                </div>

                {/* Section B: Learning Radar */}
                <div className="bg-secondary/20 rounded-2xl p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                        <Terminal size={24} className="text-primary" />
                        En Mi Radar de Aprendizaje
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <h4 className="font-semibold text-primary uppercase text-xs tracking-wider">Profundizando</h4>
                            <ul className="space-y-2 text-sm text-foreground/80">
                                <li>• Arquitectura Microservicios</li>
                                <li>• Patrones de diseño avanzados</li>
                                <li>• Algoritmos de optimización</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-semibold text-green-500 uppercase text-xs tracking-wider">Actualmente</h4>
                            <ul className="space-y-2 text-sm text-foreground/80">
                                <li>• TypeScript (Migration)</li>
                                <li>• Testing (Jest/Vitest)</li>
                                <li>• Docker basics</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-semibold text-amber-500 uppercase text-xs tracking-wider">Próximos 3 meses</h4>
                            <ul className="space-y-2 text-sm text-foreground/80">
                                <li>• GraphQL APIs</li>
                                <li>• Redis caching layers</li>
                                <li>• Kafka/RabbitMQ</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-semibold text-purple-500 uppercase text-xs tracking-wider">Visión 6 meses</h4>
                            <ul className="space-y-2 text-sm text-foreground/80">
                                <li>• Kubernetes basics</li>
                                <li>• Serverless architecture</li>
                                <li>• Advanced CI/CD</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
