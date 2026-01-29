import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5543991080383?text=Olá! Gostaria de agendar uma aula experimental.";

const WhatsAppCTASection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-background to-charcoal"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[120px]"></div>

      {/* Content */}
      <div className="relative container-custom mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
          Pronto para <span className="text-gradient">começar?</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Tire suas dúvidas, conheça as turmas e agende sua aula experimental hoje mesmo.
        </p>

        {/* Giant WhatsApp Button */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-display text-xl md:text-2xl font-bold uppercase tracking-wider px-10 md:px-16 py-5 md:py-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse-glow"
        >
          <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />
          <span>(43) 9 9108-0383</span>
        </a>

        <p className="mt-6 text-sm text-muted-foreground">
          Resposta rápida. 💪
        </p>
      </div>
    </section>
  );
};

export default WhatsAppCTASection;
