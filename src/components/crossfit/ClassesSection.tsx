import { Button } from "@/components/ui/button";
import { Dumbbell, Target, Heart, Baby, User, Zap } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5543991080383?text=Olá! Gostaria de experimentar uma aula.";

const ClassesSection = () => {
  const classes = [
    {
      icon: Dumbbell,
      name: "CrossFit",
      description: "Treino funcional completo que combina força, cardio e performance em alta intensidade.",
    },
    {
      icon: Target,
      name: "GAP",
      description: "Foco em glúteos, abdômen e pernas para definição e fortalecimento muscular.",
    },
    {
      icon: Heart,
      name: "CFA4Girls",
      description: "Turma exclusiva feminina às 13h10. Ambiente acolhedor e motivador.",
    },
    {
      icon: Baby,
      name: "CFA Kids",
      description: "Movimento, disciplina e diversão. Hábitos saudáveis desde a infância.",
    },
    {
      icon: User,
      name: "Calistenia",
      description: "Força e controle corporal usando o peso do próprio corpo.",
    },
    {
      icon: Zap,
      name: "Personal",
      description: "Acompanhamento individualizado para resultados ainda mais rápidos.",
    },
  ];

  return (
    <section id="modalidades" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Modalidades</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
            Encontre o Treino Ideal Para Você
          </h2>
          <p className="text-foreground/70">
            Oferecemos diversas modalidades para atender todos os objetivos e níveis de condicionamento.
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {classes.map((classItem) => (
            <div
              key={classItem.name}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <classItem.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">{classItem.name}</h3>
                <p className="text-foreground/70 leading-relaxed">{classItem.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide px-10 py-4 rounded-full text-lg">
              Agendar Aula Experimental
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
