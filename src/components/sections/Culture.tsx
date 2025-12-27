import { Handshake, Heart, Brain, Search, Hammer, Bot } from "lucide-react";

const Culture = () => {
    const items = [
        {
            icon: <Brain size={24} className="text-purple-500" />,
            title: "Aprendizaje continuo",
            seek: "Busco: Equipos que inviertan en capacitación y crecimiento.",
            bring: "Aporto: Hambre insaciable por mejorar y compartir conocimiento.",
        },
        {
            icon: <Handshake size={24} className="text-blue-500" />,
            title: "Colaboración radical",
            seek: "Busco: Pair programming, code reviews constructivos.",
            bring: "Aporto: Mente abierta, sin ego, feedback honesto.",
        },
        {
            icon: <Heart size={24} className="text-pink-500" />,
            title: "Impacto sobre vanidad",
            seek: "Busco: Proyectos que resuelven problemas reales.",
            bring: "Aporto: Pragmatismo y enfoque en valor de negocio.",
        },
        {
            icon: <Search size={24} className="text-amber-500" />,
            title: "Transparencia técnica",
            seek: "Busco: Ambientes donde preguntar sea fortaleza.",
            bring: "Aporto: Honestidad sobre capacidades y bloqueos.",
        },
        {
            icon: <Hammer size={24} className="text-orange-500" />,
            title: "Mentalidad de constructor",
            seek: "Busco: Empresas jugando a largo plazo.",
            bring: "Aporto: Código mantenible, no parches temporales.",
        },
        {
            icon: <Bot size={24} className="text-green-500" />,
            title: "Automatización como cultura",
            seek: "Busco: Equipos que eliminan el trabajo manual.",
            bring: "Aporto: Experiencia construyendo bots que ahorran horas.",
        },
    ];

    return (
        <section id="culture" className="py-24 bg-card/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        El Equipo que Busco
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        (Y el teammate que encontrarás en mí)
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors space-y-4"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-secondary rounded-lg">{item.icon}</div>
                                <h3 className="font-bold text-foreground">{item.title}</h3>
                            </div>
                            <div className="space-y-3 pl-2 border-l-2 border-border/50">
                                <p className="text-sm text-muted-foreground">
                                    <strong className="text-foreground/80 block mb-1">Busco:</strong> {item.seek.replace("Busco: ", "")}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    <strong className="text-primary block mb-1">Aporto:</strong> {item.bring.replace("Aporto: ", "")}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Culture;
