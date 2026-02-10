import { useState } from "react";
import { X, Loader2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const WEBHOOK_URL = "https://n8n-n8n.rte6ms.easypanel.host/webhook/forms_page_cfa";

interface WhatsAppFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappUrl: string;
}

const WhatsAppFormModal = ({ isOpen, onClose, whatsappUrl }: WhatsAppFormModalProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    idade: "",
    limitacao: "",
    treinando: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome.trim() || !formData.telefone.trim() || !formData.email.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, telefone e e-mail.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          origem: window.location.href,
        }),
      });

      toast({
        title: "Dados enviados!",
        description: "Você será redirecionado para o WhatsApp.",
      });

      setFormData({ nome: "", telefone: "", email: "", idade: "", limitacao: "", treinando: "" });
      onClose();

      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 500);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro",
        description: "Não foi possível enviar. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl animate-scale-in overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-primary/10 px-6 py-5 border-b border-border">
          <h3 className="font-display text-xl font-bold text-foreground">
            Quase lá! 💪
          </h3>
          <p className="text-foreground/60 text-sm mt-1">
            Preencha seus dados para continuarmos no WhatsApp.
          </p>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/50 flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-background transition-colors"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Nome *</label>
            <Input
              placeholder="Seu nome completo"
              value={formData.nome}
              onChange={(e) => handleChange("nome", e.target.value)}
              maxLength={100}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Telefone *</label>
            <Input
              placeholder="(43) 9 9999-9999"
              value={formData.telefone}
              onChange={(e) => handleChange("telefone", e.target.value)}
              maxLength={20}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">E-mail *</label>
            <Input
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              maxLength={255}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Idade</label>
            <Input
              type="number"
              placeholder="Sua idade"
              value={formData.idade}
              onChange={(e) => handleChange("idade", e.target.value)}
              min={5}
              max={120}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Tem alguma limitação ou lesão?</label>
            <Input
              placeholder="Ex: Dor no joelho, hérnia de disco..."
              value={formData.limitacao}
              onChange={(e) => handleChange("limitacao", e.target.value)}
              maxLength={200}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Está treinando atualmente?</label>
            <div className="flex gap-3">
              {["Sim", "Não"].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleChange("treinando", opt)}
                  className={`flex-1 py-2 px-4 rounded-lg border text-sm font-medium transition-all duration-200 ${
                    formData.treinando === opt
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border text-foreground/70 hover:border-primary/50"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold uppercase tracking-wide py-3 rounded-full text-base mt-2"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
            ) : (
              <MessageCircle className="w-5 h-5 mr-2" />
            )}
            {isLoading ? "Enviando..." : "Continuar no WhatsApp"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default WhatsAppFormModal;
