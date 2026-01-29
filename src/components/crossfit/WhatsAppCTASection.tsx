import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5543991080383?text=Olá! Gostaria de agendar uma aula experimental.";

const WhatsAppCTASection = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-background to-charcoal"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-48 h-48 bg-primary/20 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>

      {/* Content */}
      <div className="relative container-custom mx-auto px-4 text-center">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-foreground">
          Pronto para <span className="text-gradient">começar?</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Tire suas dúvidas, conheça as turmas e agende sua aula experimental hoje mesmo.
        </p>

        {/* Giant WhatsApp Button */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-display text-lg md:text-xl font-bold uppercase tracking-wider px-8 md:px-12 py-4 md:py-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse-glow"
        >
          <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
          <span>(43) 9 9108-0383</span>
        </a>

        <p className="mt-5 text-xs text-muted-foreground">
          Resposta rápida. 💪
        </p>
      </div>
    </section>
  );
};

export default WhatsAppCTASection;
