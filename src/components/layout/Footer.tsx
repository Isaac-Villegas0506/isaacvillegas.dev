import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-card border-t border-border mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Column 1: Philosophy */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Filosofía</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Este portafolio no es un catálogo de servicios. Es una declaración
                            de intenciones: busco un equipo, no proyectos. Busco crecer, no
                            solo facturar.
                        </p>
                        <div className="pt-2">
                            <p className="text-foreground font-medium text-sm">
                                Isaac Villegas
                            </p>
                            <p className="text-muted-foreground text-xs">
                                Estudiante de Ing. de Software con IA | Desarrollador Web Junior
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">
                            Explorar
                        </h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link
                                    href="#hero"
                                    className="hover:text-primary transition-colors"
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#about"
                                    className="hover:text-primary transition-colors"
                                >
                                    Mi Historia
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#projects"
                                    className="hover:text-primary transition-colors"
                                >
                                    Proyectos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#vision"
                                    className="hover:text-primary transition-colors"
                                >
                                    Visión
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#contact"
                                    className="hover:text-primary transition-colors"
                                >
                                    Conversemos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Connect */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Conectar</h3>
                        <div className="flex flex-col gap-3">
                            <a
                                href="https://github.com/isaacvillegas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                            >
                                <Github size={20} className="group-hover:text-primary transition-colors" />
                                <span className="text-sm">GitHub (450+ commits)</span>
                            </a>
                            <a
                                href="https://linkedin.com/in/isaacvillegas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                            >
                                <Linkedin size={20} className="group-hover:text-primary transition-colors" />
                                <span className="text-sm">LinkedIn (Conectemos)</span>
                            </a>
                            <a
                                href="mailto:isaac@example.com"
                                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                            >
                                <Mail size={20} className="group-hover:text-primary transition-colors" />
                                <span className="text-sm">Email (Conversemos)</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border/50 bg-background/50">
                <div className="container mx-auto px-4 py-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        © 2025 Isaac Villegas | Construido con React + Tailwind
                    </p>
                    <p className="text-xs font-mono text-primary/80">
                        "Código limpio hoy, mejor código mañana" ⚡
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
