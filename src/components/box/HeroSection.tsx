import { Button } from "@/components/box/ui/button";
import { ChevronDown } from "lucide-react";
import { useWhatsAppForm } from "./WhatsAppFormContext";

const WHATSAPP_LINK = "https://wa.me/5543991796835?text=Olá! Gostaria de agendar uma aula experimental gratuita.";
const HERO_VIDEO_URL = "https://ssmiynhzwcalaswcsjsy.supabase.co/storage/v1/object/public/videos/hero-bg.mp4";
const HeroSection = () => {
  const { openForm } = useWhatsAppForm();
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
      </video>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-background/70 z-[1]" />
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground">CrossFit Arapongas</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-primary font-display font-bold uppercase tracking-wider mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            SEJAM BEM VINDOS
          </p>
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            A CrossFit Arapongas é feita e une pessoas de todas as idades, níveis de condicionamento físico,
            gêneros e com diferentes objetivos em volta do <strong className="text-primary">melhor programa
            de condicionamento físico do mundo</strong>, que é acessível, seguro e eficaz para todos.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={() => openForm(WHATSAPP_LINK)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-display text-lg md:text-xl font-bold uppercase tracking-wider px-10 md:px-14 py-5 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Treine 3 dias grátis!
            </Button>
          </div>
        </div>
      </div>
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
