import { FlaskConical, Github } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const Experiments = () => {
    const experiments = [
        {
            title: "CLI Tool para Deploy Automatizado",
            stack: ["Node.js", "Commander.js", "GitHub API"],
            learn: "Cómo crear herramientas CLI y automatizar workflows.",
            lines: "~500 lines",
        },
        {
            title: "Bot de Monitoreo de APIs",
            stack: ["Python", "Requests", "SQLite"],
            learn: "Scheduling, logging avanzado y manejo de timeouts.",
            lines: "~800 lines",
        },
        {
            title: "Sistema de Cache Inteligente",
            stack: ["Node.js", "Redis", "Express"],
            learn: "Caching strategies y TTL dinámico.",
            lines: "~300 lines",
        },
        {
            title: "Dashboard Personal de Productividad",
            stack: ["React", "Chart.js", "LocalStorage"],
            learn: "Visualización de datos y optimización de re-renders.",
            lines: "~2000 lines",
        },
        {
            title: "API REST Boilerplate",
            stack: ["Express", "JWT", "Swagger"],
            learn: "Arquitectura escalable, seguridad y documentación.",
            lines: "~1500 lines",
        },
    ];

    return (
        <section id="experiments" className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center justify-center p-3 bg-secondary/50 rounded-full mb-4">
                        <FlaskConical size={24} className="text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Lo que construyo cuando nadie me paga
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Mis noches y fines de semana son para experimentar. No busco clientes para esto, busco conocimiento.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experiments.map((exp, i) => (
                        <div key={i} className="group bg-card hover:bg-card/80 border border-border hover:border-primary/50 transition-all p-6 rounded-xl shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors pr-4">{exp.title}</h3>
                                <Badge variant="outline" className="shrink-0 text-[10px] font-mono opacity-70">
                                    {exp.lines}
                                </Badge>
                            </div>

                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                {exp.learn}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                                {exp.stack.map(tech => (
                                    <span key={tech} className="text-xs text-secondary-foreground bg-secondary px-2 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Open Source Card */}
                    <a href="https://github.com/Isaac-Villegas0506" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 hover:border-primary/50 transition-all p-6 rounded-xl flex flex-col justify-center items-center text-center space-y-4 cursor-pointer hover:shadow-lg hover:bg-primary/5">
                        <Github size={40} className="text-primary" />
                        <h3 className="font-bold text-foreground">Contribuciones Open Source</h3>
                        <p className="text-sm text-muted-foreground">
                            He contribuido con bug fixes y docs a librerías que uso. Entiendo el valor del ecosistema.
                        </p>
                    </a>
                </div>
            </div>
        </section >
    );
};

export default Experiments;
