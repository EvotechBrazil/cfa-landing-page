import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre os veículos."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-glow"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline">Fale Conosco</span>
    </a>
  );
};

export default WhatsAppButton;
