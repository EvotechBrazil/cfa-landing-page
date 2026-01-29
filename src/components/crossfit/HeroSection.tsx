import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, CheckCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5543991080383?text=Olá! Gostaria de agendar uma aula experimental.";

const HeroSection = () => {
  const highlights = [
    "Treino para iniciantes e avançados",
    "Acompanhamento de coaches",
    "Comunidade forte e acolhedora",
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px]"></div>

      {/* Content */}
      <div className="relative container-custom mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">CrossFit Arapongas</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up text-shadow">
            <span className="text-foreground">Seu corpo é capaz de </span>
            <span className="text-gradient">muito mais.</span>
            <br />
            <span className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl">A mudança começa no </span>
            <span className="text-gradient text-3xl sm:text-4xl md:text-5xl lg:text-6xl">primeiro treino.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Treinos intensos, acompanhamento profissional e uma comunidade que te puxa pra cima. 
            Aqui você não vem só treinar — você vem se transformar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="cta-button text-base sm:text-lg w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                Agendar Aula Experimental
              </Button>
            </a>
            <a href="#tour">
              <Button className="cta-button-outline text-base sm:text-lg w-full sm:w-auto">
                <MapPin className="w-5 h-5" />
                Quero Conhecer o Box
              </Button>
            </a>
          </div>

          {/* Highlights */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
