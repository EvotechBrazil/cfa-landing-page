import { Button } from "@/components/ui/button";
import { Target, Users, TrendingUp, MessageCircle } from "lucide-react";
import logoCFA from "@/assets/logo-cfa.jpeg";

const WHATSAPP_LINK = "https://wa.me/5543991080383?text=Olá! Gostaria de agendar uma aula experimental.";

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "Metodologia CrossFit",
      description: "Adaptação por nível para todos os alunos",
    },
    {
      icon: Users,
      title: "Ambiente motivador",
      description: "Estrutura completa e comunidade acolhedora",
    },
    {
      icon: TrendingUp,
      title: "Evolução real",
      description: "Progresso visível treino a treino",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-5">
              <span className="text-foreground">Aqui você treina com </span>
              <span className="text-gradient">propósito.</span>
              <br />
              <span className="text-foreground">E com gente que </span>
              <span className="text-gradient">cuida de você.</span>
            </h2>
            
            <p className="text-muted-foreground text-sm md:text-base mb-6">
              A CrossFit Arapongas é para pessoas que decidiram parar de adiar resultados.
              Você treina com orientação, segurança e uma comunidade que vibra com cada evolução.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-6">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="cta-button text-sm">
                <MessageCircle className="w-4 h-4" />
                Quero Viver Essa Experiência
              </Button>
            </a>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-secondary rounded-2xl overflow-hidden border border-border">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center p-8">
                <img 
                  src={logoCFA} 
                  alt="CrossFit Arapongas" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-[80px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
