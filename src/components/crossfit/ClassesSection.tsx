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
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Turmas para cada </span>
            <span className="text-gradient">objetivo.</span>
            <br />
            <span className="text-foreground">Uma comunidade para </span>
            <span className="text-gradient">todas as fases.</span>
          </h2>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {classes.map((classItem) => (
            <div
              key={classItem.name}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <classItem.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">{classItem.name}</h3>
              <p className="text-muted-foreground mb-3">{classItem.description}</p>
              <p className="text-sm text-primary font-medium mb-4">{classItem.benefits}</p>
              <a
                href={`https://wa.me/5543991080383?text=Olá! Gostaria de experimentar a turma de ${classItem.name}.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase">
                  Quero Experimentar
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="cta-button text-lg px-12">
              <MessageCircle className="w-5 h-5" />
              Agendar Aula Experimental no WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
