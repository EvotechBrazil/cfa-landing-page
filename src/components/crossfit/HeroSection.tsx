import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5543991080383?text=Olá! Gostaria de agendar uma aula experimental gratuita.";

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, hsl(var(--primary) / 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground">CrossFit Arapongas</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-primary font-display font-bold uppercase tracking-wider mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Você é bem-vindo(a) aqui!
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            A CrossFit Arapongas é feita e une pessoas de todas as idades, níveis de condicionamento físico, 
            gêneros e com diferentes objetivos em volta do <strong className="text-primary">melhor programa 
            de condicionamento físico do mundo</strong>, que é acessível, seguro e eficaz para todos.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-display text-lg md:text-xl font-bold uppercase tracking-wider px-10 md:px-14 py-5 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Treine 7 dias grátis!
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#sobre" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-foreground/60 hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
