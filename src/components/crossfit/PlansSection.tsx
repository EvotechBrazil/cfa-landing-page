import { useState } from "react";
import planosTodos from "@/assets/planos-todos.png";
import planos1 from "@/assets/planos-1.jpg";
import planos2 from "@/assets/planos-2.png";

const plans = [
  {
    image: planos1,
    label: "Plano Mensal",
    link: "https://venda.nextfit.com.br/413736c1-7369-4af0-8a6c-838118fbb371/contratos",
  },
  {
    image: planos2,
    label: "Plano Trimestral",
    link: "https://venda.nextfit.com.br/413736c1-7369-4af0-8a6c-838118fbb371/contratos",
  },
];

const PlansSection = () => {
  const [zoomedPlan, setZoomedPlan] = useState<number | null>(null);

  return (
    <section id="planos" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-xs">Planos</span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-6 text-foreground">
            Conheça Nossos Planos
          </h2>
          <p className="text-foreground/70 text-sm">
            Escolha o plano ideal para você e comece sua transformação hoje mesmo.
          </p>
        </div>

        {/* Plans as individual cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-card transition-all duration-500 hover:shadow-glow hover:-translate-y-2 hover:scale-[1.03]"
              onClick={() => setZoomedPlan(index)}
            >
              <img
                src={plan.image}
                alt={plan.label}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                <span className="bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-lg shadow-button transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  Ver Detalhes
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Full image link */}
        <div className="text-center mt-10">
          <a
            href={plans[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-block"
          >
            Matricule-se Agora
          </a>
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomedPlan !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in cursor-pointer"
          onClick={() => setZoomedPlan(null)}
        >
          <div
            className="relative max-w-3xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={plans[zoomedPlan].image}
              alt={plans[zoomedPlan].label}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <a
              href={plans[zoomedPlan].link}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-block mt-6 mx-auto text-center w-full"
            >
              Contratar {plans[zoomedPlan].label}
            </a>
            <button
              onClick={() => setZoomedPlan(null)}
              className="absolute -top-3 -right-3 bg-card text-foreground w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Fechar"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PlansSection;
