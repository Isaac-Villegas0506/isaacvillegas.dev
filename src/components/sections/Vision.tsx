import { Sprout, TreeDeciduous, TreePine } from "lucide-react";

const Vision = () => {
    return (
        <section id="vision" className="py-24 bg-background relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Dónde me veo
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        No busco un empleo de paso. Busco una carrera.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* 1 Year */}
                    <div className="bg-card border border-border p-8 rounded-2xl flex flex-col items-center text-center hover:border-primary/40 transition-colors">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                            <Sprout size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">1 AÑO</h3>
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">Senior Full Stack Developer</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Liderar arquitectura de sistemas, mentorar a nuevos juniors y diseñar APIs usadas por múltiples equipos.
                            Reducir dependency de tech leads en un 80%.
                        </p>
                    </div>

                    {/* 3 Years */}
                    <div className="bg-card border border-primary p-8 rounded-2xl flex flex-col items-center text-center shadow-lg transform md:-translate-y-4 z-10">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                            <TreeDeciduous size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">3 AÑOS</h3>
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">Tech Lead / Architect</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Diseñar arquitecturas escalables desde cero, contribuir a Open Source como parte de mi rol,
                            y ser el puente entre negocio y tecnología.
                        </p>
                    </div>

                    {/* Today */}
                    <div className="bg-card border border-border p-8 rounded-2xl flex flex-col items-center text-center hover:border-primary/40 transition-colors">
                        <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6">
                            <TreePine size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">HOY</h3>
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">Engineer & Builder</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Absorbiendo buenas prácticas, entregando valor desde el día 1, automatizando procesos y
                            construyendo confianza con cada commit.
                        </p>
                    </div>
                </div>

                {/* Commitment */}
                <div className="mt-20 bg-secondary/30 border border-border rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-center mb-8">📜 Mi Compromiso con mi Futuro Equipo</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Estaré al menos 2 años si el proyecto y cultura son los correctos",
                            "Cada mes seré un developer mejor que el anterior",
                            "Compartiré conocimiento: docs, pair programming",
                            "Pediré feedback constantemente (y lo aplicaré)",
                            "Celebraré los éxitos colectivos sobre los individuales",
                            "Cuestionaré decisiones con datos, nunca con ego"
                        ].map((text, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <span className="text-primary mt-1">✅</span>
                                <p className="text-muted-foreground text-sm font-medium">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Vision;
