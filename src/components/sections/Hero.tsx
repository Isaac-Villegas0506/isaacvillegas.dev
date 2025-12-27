import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Download, Github, Linkedin, Terminal } from "lucide-react";

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 -z-10 w-[30%] h-[30%] bg-secondary/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Column (60%) */}
                    <div className="lg:col-span-7 flex flex-col items-start space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-sm font-medium text-secondary-foreground">
                            <Terminal size={14} className="text-primary" />
                            <span>Software Engineering Student | AI Enthusiast</span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-2">
                            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                                Hola, soy
                            </h2>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
                                Isaac Villegas
                            </h1>
                            <h3 className="text-2xl md:text-3xl font-semibold text-foreground/90 pt-2">
                                Estudiante de Ingeniería de Software con IA <br className="hidden md:block" /> |{" "}
                                <span className="text-primary">Desarrollador Web Junior</span>
                            </h3>
                            <p className="text-lg md:text-xl text-muted-foreground font-medium pt-1">
                                Combinando fundamentos de ingeniería con desarrollo web moderno
                            </p>
                        </div>

                        {/* Paragraph */}
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                            Estudio Ingeniería de Software con especialización en Inteligencia
                            Artificial, pero mi pasión diaria es el Desarrollo de Software. No busco
                            proyectos cortos. Busco un equipo donde pueda aportar mis
                            fundamentos técnicos desde el día 1, aprender de profesionales
                            experimentados y construir una carrera de largo plazo.
                        </p>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {[
                                "React + Vite",
                                "JavaScript ES6+",
                                "Node.js",
                                "Laravel",
                                "Python",
                                "SQL",
                                "Git",
                            ].map((tech) => (
                                <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm bg-secondary/50 backdrop-blur-sm border-secondary-foreground/10">
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button size="lg" className="rounded-full text-base px-8 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25">
                                Ver mi evolución <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full text-base px-8 border-foreground/20 hover:bg-foreground/5">
                                Conozcamos más
                            </Button>
                            <Button size="lg" variant="ghost" className="rounded-full text-base px-6 text-muted-foreground hover:text-foreground">
                                <Download className="mr-2 h-4 w-4" /> CV Completo
                            </Button>
                        </div>

                        {/* Social */}
                        <div className="flex items-center gap-4 pt-4 border-t border-border/40 w-full max-w-md">
                            <span className="text-sm text-muted-foreground">Encuéntrame en:</span>
                            <a href="https://github.com/isaacvillegas" target="_blank" className="p-2 hover:bg-secondary rounded-full transition-colors text-muted-foreground hover:text-foreground">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/isaacvillegas" target="_blank" className="p-2 hover:bg-secondary rounded-full transition-colors text-muted-foreground hover:text-foreground">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column (40%) */}
                    <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-card">
                            {/* Placeholder for image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-card to-background flex flex-col items-center justify-center text-muted-foreground p-8 text-center space-y-4">
                                <div className="w-24 h-24 rounded-full bg-secondary/50 flex items-center justify-center mb-4">
                                    <Terminal size={48} className="text-primary/50" />
                                </div>
                                <p className="text-sm">
                                    [Isaac's Photo Placeholder]
                                </p>
                                <p className="text-xs max-w-[200px] opacity-70">
                                    Replace this with a professional photo with neutral background in public/images folder.
                                </p>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>

                        {/* Floating Cards (Optional decoration) */}
                        <div className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-xl shadow-xl hidden md:block animate-pulse-slow">
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-green-500" />
                                <span className="text-sm font-medium">Available for long-term roles</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
