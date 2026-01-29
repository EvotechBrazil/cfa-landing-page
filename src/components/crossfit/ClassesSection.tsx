import { Button } from "@/components/ui/button";
import { MessageCircle, Dumbbell, Target, Heart, Baby, User } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5543991080383?text=Olá! Gostaria de agendar uma aula experimental.";

const ClassesSection = () => {
  const classes = [
    {
      icon: Dumbbell,
      name: "CrossFit",
      description: "Treino funcional completo: força, cardio e performance.",
      benefits: "Condicionamento, saúde, disposição, resultados.",
      color: "primary",
    },
    {
      icon: Target,
      name: "GAP",
      description: "Glúteos, abdômen e pernas com foco em definição e força.",
      benefits: "Tonificação e fortalecimento muscular.",
      color: "primary",
    },
    {
      icon: Heart,
      name: "CFA4Girls",
      description: "Turma exclusiva para mulheres, ambiente motivador e confortável.",
      benefits: "Exclusivo feminino às 13h10.",
      color: "primary",
    },
    {
      icon: Baby,
      name: "CFA Kids",
      description: "Movimento + disciplina + diversão. Hábitos saudáveis desde cedo.",
      benefits: "Desenvolvimento infantil completo.",
      color: "primary",
    },
    {
      icon: User,
      name: "Calistenia",
      description: "Força e controle corporal usando o peso do próprio corpo.",
      benefits: "Domínio corporal e força funcional.",
      color: "primary",
    },
  ];

  return (
    <section id="turmas" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            <span className="text-foreground">Turmas para cada </span>
            <span className="text-gradient">objetivo.</span>
            <br />
            <span className="text-foreground">Uma comunidade para </span>
            <span className="text-gradient">todas as fases.</span>
          </h2>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {classes.map((classItem) => (
            <div
              key={classItem.name}
              className="group bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <classItem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1.5">{classItem.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{classItem.description}</p>
              <p className="text-xs text-primary font-medium mb-3">{classItem.benefits}</p>
              <a
                href={`https://wa.me/5543991080383?text=Olá! Gostaria de experimentar a turma de ${classItem.name}.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase text-xs">
                  Quero Experimentar
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="cta-button text-sm px-8">
              <MessageCircle className="w-4 h-4" />
              Agendar Aula Experimental no WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
