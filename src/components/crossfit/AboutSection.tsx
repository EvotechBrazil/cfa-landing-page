import { Button } from "@/components/ui/button";
import { Target, Users, TrendingUp, MessageCircle } from "lucide-react";

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Aqui você treina com </span>
              <span className="text-gradient">propósito.</span>
              <br />
              <span className="text-foreground">E com gente que </span>
              <span className="text-gradient">cuida de você.</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              A CrossFit Arapongas é para pessoas que decidiram parar de adiar resultados.
              Você treina com orientação, segurança e uma comunidade que vibra com cada evolução.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="cta-button">
                <MessageCircle className="w-5 h-5" />
                Quero Viver Essa Experiência
              </Button>
            </a>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-secondary rounded-2xl overflow-hidden border border-border">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-primary rounded-2xl flex items-center justify-center">
                    <span className="font-display text-4xl font-bold text-primary-foreground">CFA</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">CROSSFIT ARAPONGAS</h3>
                  <p className="text-muted-foreground">Onde a transformação acontece</p>
                </div>
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
