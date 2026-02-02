import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import planos1 from "@/assets/planos-1.jpg";
import planos2 from "@/assets/planos-2.png";

const PlansSection = () => {
  const plans = [
    {
      id: 1,
      image: planos1,
      name: "Plano 1",
      link: "#", // Será atualizado com o link real
    },
    {
      id: 2,
      image: planos2,
      name: "Plano 2",
      link: "#", // Será atualizado com o link real
    },
  ];

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

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <a
              key={plan.id}
              href={plan.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-card border border-border hover:border-primary/50"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide px-6 py-3 rounded-full text-sm shadow-lg">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Plano
                    </Button>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
