import { Button } from "@/components/ui/button";
import { Dumbbell, Target, Heart, Baby, User, Zap, ImageIcon } from "lucide-react";
import cfaKids1 from "@/assets/cfa-kids-1.jpg";
import cfaKids2 from "@/assets/cfa-kids-2.jpg";

const WHATSAPP_LINK = "https://wa.me/5543991080383?text=Olá! Gostaria de experimentar uma aula.";

const ClassesSection = () => {
  const classes = [
    {
      icon: Dumbbell,
      name: "CrossFit",
      description: "Treino funcional completo que combina força, cardio e performance em alta intensidade.",
      images: null,
    },
    {
      icon: Target,
      name: "GAP",
      description: "Foco em glúteos, abdômen e pernas para definição e fortalecimento muscular.",
      images: null,
    },
    {
      icon: Heart,
      name: "CFA4Girls",
      description: "Turma exclusiva feminina às 13h10. Ambiente acolhedor e motivador.",
      images: null,
    },
    {
      icon: Baby,
      name: "CFA Kids",
      description: "Movimento, disciplina e diversão. Hábitos saudáveis desde a infância.",
      images: [cfaKids1, cfaKids2],
    },
    {
      icon: User,
      name: "Calistenia",
      description: "Força e controle corporal usando o peso do próprio corpo.",
      images: null,
    },
    {
      icon: Zap,
      name: "Personal",
      description: "Acompanhamento individualizado para resultados ainda mais rápidos.",
      images: null,
    },
  ];

  return (
    <section id="modalidades" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-xs">Modalidades</span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-6 text-foreground">
            Encontre o Treino Ideal Para Você
          </h2>
          <p className="text-foreground/70 text-sm">
            Oferecemos diversas modalidades para atender todos os objetivos e níveis de condicionamento.
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {classes.map((classItem) => (
            <div
              key={classItem.name}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              {/* Área de Imagem */}
              <div className="relative h-48 bg-secondary/50 overflow-hidden">
                {classItem.images && classItem.images.length > 0 ? (
                  <div className="w-full h-full grid grid-cols-2 gap-0.5">
                    {classItem.images.slice(0, 2).map((img, idx) => (
                      <img 
                        key={idx}
                        src={img} 
                        alt={`${classItem.name} ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                    <ImageIcon className="w-12 h-12 mb-2 opacity-30" />
                    <span className="text-xs opacity-50">Foto da modalidade</span>
                  </div>
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Icon badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary/90 rounded-xl flex items-center justify-center shadow-lg">
                  <classItem.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{classItem.name}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{classItem.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide px-8 py-3 rounded-full text-sm">
              Agendar Aula Experimental
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
