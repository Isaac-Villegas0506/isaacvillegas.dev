import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, ChevronRight } from "lucide-react";

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-card/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Column 1: Timeline */}
                    <div className="space-y-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                            Mi Camino hasta Aquí
                        </h2>

                        <div className="relative border-l-2 border-border/60 ml-3 space-y-12">
                            {/* Item 1 */}
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                                <div className="space-y-2">
                                    <span className="text-sm font-semibold text-primary tracking-wider uppercase">2024 - Presente</span>
                                    <h3 className="text-xl font-bold text-foreground">Software Engineer & Full Stack Developer</h3>
                                    <div className="text-muted-foreground space-y-2 text-sm pt-2">
                                        <p className="flex gap-2"><ChevronRight size={16} className="text-primary shrink-0 mt-0.5" /> Construí 10+ proyectos full stack con React, Node.js, Laravel</p>
                                        <p className="flex gap-2"><ChevronRight size={16} className="text-primary shrink-0 mt-0.5" /> Desarrollé 5+ bots de automatización en Python</p>
                                        <p className="flex gap-2"><ChevronRight size={16} className="text-primary shrink-0 mt-0.5" /> Diseñé bases de datos SQL complejas</p>
                                    </div>
                                    <p className="text-sm italic text-foreground/60 pt-2 border-t border-border/50 mt-3">
                                        "Esta etapa me enseñó el 'cómo'. Ahora busco el 'con quién' y el 'a qué escala'."
                                    </p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted-foreground/30 border-4 border-background" />
                                <div className="space-y-2">
                                    <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">2023</span>
                                    <h3 className="text-xl font-bold text-foreground">Formación Intensiva Full Stack</h3>
                                    <div className="text-muted-foreground space-y-2 text-sm pt-2">
                                        <p className="flex gap-2"><ChevronRight size={16} className="text-muted-foreground shrink-0 mt-0.5" /> 1000+ horas de código (Bootcamps + Proyectos)</p>
                                        <p className="flex gap-2"><ChevronRight size={16} className="text-muted-foreground shrink-0 mt-0.5" /> Participé en hackathon universitaria (3er lugar 🏆)</p>
                                    </div>
                                    <p className="text-sm italic text-foreground/60 pt-2 border-t border-border/50 mt-3">
                                        "Aquí descubrí que programar no es solo sintaxis, es resolver problemas reales."
                                    </p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted-foreground/30 border-4 border-background" />
                                <div className="space-y-2">
                                    <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">2022</span>
                                    <h3 className="text-xl font-bold text-foreground">Inicio en Ingeniería de Software</h3>
                                    <div className="text-muted-foreground space-y-2 text-sm pt-2">
                                        <p>Inicié estudios con enfoque en IA. Mi primer 'Hello World'.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: What I seek */}
                    <div className="bg-gradient-to-br from-card to-background border border-border p-8 rounded-3xl shadow-sm">
                        <h3 className="text-2xl font-bold text-foreground mb-6">🎯 Lo que busco ahora</h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold text-foreground mb-3 uppercase text-xs tracking-wider text-primary">Mi próximo paso ideal</h4>
                                <ul className="space-y-3">
                                    {[
                                        "Equipo con cultura de code review",
                                        "Proyectos donde el código viva años",
                                        "Arquitectura compleja que desafíe",
                                        "Mentores que disfruten enseñar"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                                            <CheckCircle2 size={18} className="text-green-500 shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-6 border-t border-border/50">
                                <h4 className="font-semibold text-foreground mb-3 uppercase text-xs tracking-wider text-blue-500">Lo que aporto desde el día 1</h4>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "React + Node/Laravel Stack",
                                        "API Integration Exp",
                                        "Python Automation",
                                        "Git Workflows",
                                        "SQL Optimization",
                                        "Documentation Habit"
                                    ].map(tag => (
                                        <Badge key={tag} variant="secondary" className="font-normal">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
