import { Zap, Book, Search, HeartHandshake, Award, Sprout } from "lucide-react";

const Values = () => {
    const values = [
        {
            icon: <Zap className="text-amber-500" size={24} />,
            title: "Velocidad con propósito",
            desc: "Entrego rápido, pero nunca a costa de la calidad técnica o la deuda técnica. Prefiero una feature bien hecha hoy que tres 'parches' mañana.",
        },
        {
            icon: <Book className="text-blue-500" size={24} />,
            title: "Código como documentación",
            desc: "Escribo código que se explica solo. Y cuando no puede, documento sin excusas. Pienso en el developer que lo leerá en 6 meses.",
        },
        {
            icon: <Search className="text-purple-500" size={24} />,
            title: "Humildad técnica",
            desc: "No temo decir 'no sé, pero lo investigo'. Es mejor preguntar 10 veces que asumir 1 vez mal y romper producción.",
        },
        {
            icon: <HeartHandshake className="text-pink-500" size={24} />,
            title: "Feedback como combustible",
            desc: "Los code reviews no son críticas personales, son oportunidades. Cada 'cambiemos esto' me hace mejor developer.",
        },
        {
            icon: <Award className="text-green-500" size={24} />,
            title: "Ownership sin ego",
            desc: "Me hago responsable de mi código, pero celebro cuando alguien del equipo lo mejora. El proyecto es más importante que mi orgullo.",
        },
        {
            icon: <Sprout className="text-emerald-500" size={24} />,
            title: "Mentalidad de junior eterno",
            desc: "Llevo 2 años programando, pero planeo llevar 20 años aprendiendo. La tecnología cambia, la curiosidad es constante.",
        },
    ];

    return (
        <section id="values" className="py-24 bg-secondary/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Cómo Trabajo
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Más allá del código, estos son los valores que traigo a tu equipo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((val, idx) => (
                        <div
                            key={idx}
                            className="group bg-card hover:bg-card/80 border border-border hover:border-primary/30 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                {val.icon}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                {val.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {val.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
