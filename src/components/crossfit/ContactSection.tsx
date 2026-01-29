import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5543991080383?text=Olá! Gostaria de agendar uma aula experimental.";

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding bg-card">
      <div className="container-custom mx-auto text-center">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
          <span className="text-foreground">A mudança começa com uma </span>
          <span className="text-gradient">decisão simples.</span>
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-8">
          Se você quer mais energia, saúde e confiança, o primeiro passo é agora.
        </p>

        {/* Phone highlight */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Phone className="w-5 h-5 text-primary" />
          <a
            href="tel:+5543991080383"
            className="font-display text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            (43) 9 9108-0383
          </a>
        </div>

        {/* Final CTA */}
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <Button className="cta-button text-sm px-8">
            <MessageCircle className="w-4 h-4" />
            Agendar Aula Experimental no WhatsApp
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
