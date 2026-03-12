import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useWhatsAppForm } from "./WhatsAppFormContext";

const WHATSAPP_LINK = "https://wa.me/5543991796835?text=Olá! Quero começar a treinar na CrossFit Arapongas!";

const CTASection = () => {
  const { openForm } = useWhatsAppForm();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-[120px]" />

      <div className="relative container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
          Pronto Para Transformar Sua Vida?
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
          Junte-se a centenas de pessoas que já descobriram o poder do CrossFit. 
          Sua primeira semana é por nossa conta!
        </p>
        <Button
          onClick={() => openForm(WHATSAPP_LINK)}
          className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-display text-lg md:text-xl font-bold uppercase tracking-wide px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="w-6 h-6 mr-3" />
          Começar Agora
        </Button>
        <p className="mt-6 text-foreground/50 text-sm">
          3 dias grátis • Sem compromisso • Resultados garantidos
        </p>
      </div>
    </section>
  );
};

export default CTASection;
