import { Button } from "@/components/ui/button";
import { Zap, Brain, TrendingDown, Dumbbell, Target, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5543991080383?text=Olá! Gostaria de agendar uma aula experimental.";

const WhyExerciseSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Mais energia no dia a dia",
      description: "Disposição para enfrentar a rotina com força total.",
    },
    {
      icon: Brain,
      title: "Redução de estresse e ansiedade",
      description: "Treino que libera a mente e equilibra as emoções.",
    },
    {
      icon: TrendingDown,
      title: "Emagrecimento e condicionamento",
      description: "Resultados visíveis com treinos eficientes.",
    },
    {
      icon: Dumbbell,
      title: "Força, postura e confiança",
      description: "Corpo forte reflete em autoestima elevada.",
    },
    {
      icon: Target,
      title: "Disciplina e constância",
      description: "Hábitos que transformam sua vida por completo.",
    },
  ];

  return (
    <section id="porque" className="section-padding bg-card">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Sedentarismo custa caro.</span>
            <br />
            <span className="text-gradient">Energia, saúde e autoestima.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A rotina pesa, o corpo reclama, a mente cansa. Atividade física não é luxo — é necessidade.
            No CrossFit você evolui em força, condicionamento e saúde de um jeito eficiente, dinâmico e motivador.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-secondary/50 border border-border/50 rounded-xl p-6 text-center hover-lift hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="cta-button text-base">
              <MessageCircle className="w-5 h-5" />
              Comece Hoje. Agende Sua Aula Experimental
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyExerciseSection;
