import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5543991080383?text=Olá! Gostaria de agendar uma aula experimental.";

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding bg-card">
      <div className="container-custom mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-foreground">A mudança começa com uma </span>
          <span className="text-gradient">decisão simples.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Se você quer mais energia, saúde e confiança, o primeiro passo é agora.
        </p>

        {/* Phone highlight */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Phone className="w-6 h-6 text-primary" />
          <a
            href="tel:+5543991080383"
            className="font-display text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors"
          >
            (43) 9 9108-0383
          </a>
        </div>

        {/* Final CTA */}
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <Button className="cta-button text-lg px-12">
            <MessageCircle className="w-5 h-5" />
            Agendar Aula Experimental no WhatsApp
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
