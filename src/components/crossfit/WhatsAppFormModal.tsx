import { useState } from "react";
import { X, Loader2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const WEBHOOK_URL = "https://n8n-n8n.rte6ms.easypanel.host/webhook/forms_page_cfa";

interface WhatsAppFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappUrl: string;
}

const initialFormData = {
  nome: "",
  objetivos: [] as string[],
  rotina: "",
  meta: "",
  obstaculos: [] as string[],
  frequencia: "",
  turno: "",
  treinando: "",
  comoEncontrou: "",
};

type FormData = typeof initialFormData;

const ToggleChip = ({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`py-2 px-4 rounded-lg border text-sm font-medium transition-all duration-200 ${
      selected
        ? "bg-primary text-primary-foreground border-primary"
        : "bg-background border-border text-foreground/70 hover:border-primary/50"
    }`}
  >
    {label}
  </button>
);

const WhatsAppFormModal = ({ isOpen, onClose, whatsappUrl }: WhatsAppFormModalProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({ ...initialFormData });

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleMulti = (field: "objetivos" | "obstaculos", value: string) => {
    setFormData((prev) => {
      const arr = prev[field];
      return {
        ...prev,
        [field]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  const toggleSingle = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: prev[field] === value ? "" : value }));
  };

  const validateForm = (): boolean => {
    if (!formData.nome.trim()) {
      toast({ title: "Campo obrigatório", description: "Preencha seu nome completo.", variant: "destructive" });
      return false;
    }

    if (!formData.objetivos.length) {
      toast({ title: "Campo obrigatório", description: "Selecione pelo menos um objetivo.", variant: "destructive" });
      return false;
    }

    if (!formData.rotina.trim()) {
      toast({ title: "Campo obrigatório", description: "Preencha sua rotina de trabalho.", variant: "destructive" });
      return false;
    }

    if (!formData.meta.trim()) {
      toast({ title: "Campo obrigatório", description: "Preencha sua meta.", variant: "destructive" });
      return false;
    }

    if (!formData.obstaculos.length) {
      toast({ title: "Campo obrigatório", description: "Selecione pelo menos um obstáculo.", variant: "destructive" });
      return false;
    }

    if (!formData.frequencia || !formData.turno || !formData.treinando || !formData.comoEncontrou) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha frequência, turno, status de treino e como encontrou.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({
          ...formData,
          objetivos: formData.objetivos.join(", "),
          obstaculos: formData.obstaculos.join(", "),
          timestamp: new Date().toISOString(),
          origem: window.location.href,
        }),
      });

      toast({ title: "Dados enviados!", description: "Você será redirecionado para o WhatsApp." });
      setFormData({ ...initialFormData });
      onClose();
      setTimeout(() => window.open(whatsappUrl, "_blank"), 500);
    } catch {
      toast({ title: "Erro", description: "Não foi possível enviar. Tente novamente.", variant: "destructive" });
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
        className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl animate-scale-in overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-primary/10 px-6 py-4 border-b border-border shrink-0">
          <h3 className="font-display text-xl font-bold text-foreground">Quase lá! 💪</h3>
          <p className="text-foreground/60 text-sm mt-1">Preencha para continuarmos no WhatsApp.</p>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/50 flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-background transition-colors"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !(e.target instanceof HTMLTextAreaElement)) e.preventDefault();
          }}
          className="p-6 space-y-4 overflow-y-auto flex-1"
        >
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Nome completo *</label>
            <Input placeholder="Seu nome completo" value={formData.nome} onChange={(e) => handleChange("nome", e.target.value)} maxLength={100} />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">O que você quer melhorar? (pode marcar várias)</label>
            <div className="flex flex-wrap gap-2">
              {["Emagrecer", "Condicionamento físico", "Ganhar força", "Performance esportiva"].map((opt) => (
                <ToggleChip key={opt} label={opt} selected={formData.objetivos.includes(opt)} onClick={() => toggleMulti("objetivos", opt)} />
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Como é sua rotina de trabalho?</label>
            <Input placeholder="Ex: trabalho das 8h às 17h" value={formData.rotina} onChange={(e) => handleChange("rotina", e.target.value)} maxLength={200} />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Qual é sua meta e por que ela importa pra você agora?</label>
            <Textarea placeholder="Conte um pouco sobre sua meta..." value={formData.meta} onChange={(e) => handleChange("meta", e.target.value)} maxLength={500} className="min-h-[70px]" />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">O que mais te atrapalha hoje? (pode marcar várias)</label>
            <div className="flex flex-wrap gap-2">
              {["Falta de tempo", "Insegurança / nunca treinei", "Dores ou limitações físicas", "Custo", "Distância"].map((opt) => (
                <ToggleChip key={opt} label={opt} selected={formData.obstaculos.includes(opt)} onClick={() => toggleMulti("obstaculos", opt)} />
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Quantas vezes por semana você conseguiria treinar?</label>
            <div className="flex flex-wrap gap-2">
              {["2x", "3x", "4x ou mais"].map((opt) => (
                <ToggleChip key={opt} label={opt} selected={formData.frequencia === opt} onClick={() => toggleSingle("frequencia", opt)} />
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Qual turno você prefere?</label>
            <div className="flex flex-wrap gap-2">
              {["Manhã", "Tarde", "Noite"].map((opt) => (
                <ToggleChip key={opt} label={opt} selected={formData.turno === opt} onClick={() => toggleSingle("turno", opt)} />
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Você já treina atualmente?</label>
            <div className="flex flex-wrap gap-2">
              {["Sim, treino regularmente", "Treinei antes, mas parei", "Estou começando do zero"].map((opt) => (
                <ToggleChip key={opt} label={opt} selected={formData.treinando === opt} onClick={() => toggleSingle("treinando", opt)} />
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Como você nos encontrou?</label>
            <div className="flex flex-wrap gap-2">
              {["Instagram", "Indicação de amigo/conhecido", "Vi a academia na cidade", "Outro"].map((opt) => (
                <ToggleChip key={opt} label={opt} selected={formData.comoEncontrou === opt} onClick={() => toggleSingle("comoEncontrou", opt)} />
              ))}
            </div>
          </div>

          <Button
            type="submit"
            variant="whatsapp"
            disabled={isLoading}
            className="w-full font-bold uppercase tracking-wide py-3 rounded-full text-base"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <MessageCircle className="w-5 h-5 mr-2" />}
            {isLoading ? "Enviando..." : "Continuar no WhatsApp"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default WhatsAppFormModal;
