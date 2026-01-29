"use client";

import { Button, buttonVariants } from "@/components/ui/Button";
import { Mail, Linkedin, Github, Copy, Check } from "lucide-react";
import { useState } from "react";

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("isaac.villegas@email.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">

            {/* Decor bg */}
            <div className="absolute  bottom-0 right-0 w-[40%] h-[40%] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Manifesto */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                                ¿Buscas un Developer Junior comprometido?
                            </h2>
                            <h3 className="text-xl text-primary font-medium">
                                No te enviaré un presupuesto. Tengamos una conversación real.
                            </h3>
                        </div>

                        <div className="prose prose-invert text-muted-foreground leading-relaxed">
                            <p>
                                Si buscas a alguien que se quede años, traiga stack completo funcional,
                                automatice lo manual y documente obsesivamente...
                            </p>
                            <p className="font-semibold text-foreground">
                                Entonces conversemos.
                            </p>
                            <p>
                                Soy Isaac. Ingeniero de Software. Full Stack Developer.
                                Constructor de sistemas, no solo de features.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg max-w-md border border-border/50">
                                <Mail className="text-primary shrink-0" />
                                <span className="text-foreground font-medium flex-grow truncate px-2">isaac.villegas@email.com</span>
                                <button onClick={copyEmail} className="text-muted-foreground hover:text-foreground transition-colors" title="Copiar">
                                    {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                                </button>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href="https://linkedin.com/in/isaacvillegas"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={buttonVariants({ variant: "outline", className: "gap-2 w-full sm:w-auto" })}
                                >
                                    <Linkedin size={18} /> LinkedIn
                                </a>
                                <a
                                    href="https://github.com/Isaac-Villegas0506"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={buttonVariants({ variant: "outline", className: "gap-2 w-full sm:w-auto" })}
                                >
                                    <Github size={18} /> GitHub
                                </a>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-border/40">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                                <span>Evaluando oportunidades | Respondo en {`<`}24h</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground">Tu nombre *</label>
                                <input type="text" id="name" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground" placeholder="John Doe" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">Tu email *</label>
                                <input type="email" id="email" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground" placeholder="john@company.com" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground">Mensaje</label>
                                <textarea id="message" rows={5} className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-foreground" placeholder="Cuéntame sobre el equipo, el proyecto y qué buscan en un junior..." required />
                            </div>

                            <Button type="submit" size="lg" className="w-full text-base py-6">
                                Iniciar conversación
                            </Button>

                            <p className="text-xs text-center text-muted-foreground">
                                Respondo en menos de 24h.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
