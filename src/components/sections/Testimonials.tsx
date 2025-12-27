import { Quote } from "lucide-react";

const Testimonials = () => {
    const testimonials = [
        {
            text: "Trabajar con Isaac fue refrescante. No solo escribía código funcional, pensaba en cómo se mantendría. Sus skills en automatización nos ahorraron 15 horas semanales.",
            author: "Senior Developer",
            role: "Proyecto X",
        },
        {
            text: "Isaac integró 6 APIs diferentes y diseñó la arquitectura para que fuera extensible. Lo que más me impresionó fue su ownership total.",
            author: "Tech Lead",
            role: "Startup Y",
        },
        {
            text: "Tiene esa combinación perfecta: sólidos fundamentos de ingeniería pero con habilidades prácticas aplicables hoy. Sus commits son una obra de arte.",
            author: "CTO",
            role: "Empresa Z",
        },
        {
            text: "Le pedimos un dashboard con datos de 3 fuentes. Isaac no solo lo construyó, automatizó todo el pipeline de datos con un bot Python. Eso es ingeniería real.",
            author: "Product Manager",
            role: "Proyecto W",
        },
    ];

    return (
        <section id="testimonials" className="py-24 bg-background border-t border-border/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Lo que dicen quienes trabajaron conmigo
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-gradient-to-br from-card to-background border border-border p-8 rounded-2xl relative shadow-sm">
                            <Quote className="absolute top-8 right-8 text-primary/10" size={48} />
                            <p className="text-muted-foreground text-lg leading-relaxed italic relative z-10">
                                "{t.text}"
                            </p>
                            <div className="mt-6 pt-6 border-t border-border/50 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-secondary-foreground">
                                    {t.author[0]}
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground text-sm">{t.author}</p>
                                    <p className="text-xs text-muted-foreground">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
