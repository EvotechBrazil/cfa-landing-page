import { useState } from "react";
import { X, Loader2, MessageCircle, ChevronRight, ChevronLeft } from "lucide-react";
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
  telefone: "",
  email: "",
  idade: "",
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
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({ ...initialFormData });

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits.length ? `(${digits}` : "";
    if (digits.length <= 3) return `(${digits.slice(0, 2)})${digits.slice(2)}`;
    if (digits.length <= 7) return `(${digits.slice(0, 2)})${digits.slice(2, 3)}.${digits.slice(3)}`;
    return `(${digits.slice(0, 2)})${digits.slice(2, 3)}.${digits.slice(3, 7)}-${digits.slice(7)}`;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    if (field === "telefone") {
      setFormData((prev) => ({ ...prev, telefone: formatPhone(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
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

  const validateStep = (): boolean => {
    if (step === 0) {
      if (!formData.nome.trim() || !formData.telefone.trim() || !formData.email.trim()) {
        toast({ title: "Campos obrigatórios", description: "Preencha nome, telefone e e-mail.", variant: "destructive" });
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) setStep((s) => s + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      setStep(0);
      onClose();
      setTimeout(() => window.open(whatsappUrl, "_blank"), 500);
    } catch {
      toast({ title: "Erro", description: "Não foi possível enviar. Tente novamente.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  const totalSteps = 3;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl animate-scale-in overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-primary/10 px-6 py-4 border-b border-border shrink-0">
          <h3 className="font-display text-xl font-bold text-foreground">Quase lá! 💪</h3>
          <p className="text-foreground/60 text-sm mt-1">
            Etapa {step + 1} de {totalSteps} — Preencha para continuarmos no WhatsApp.
          </p>
          {/* Progress bar */}
          <div className="mt-3 h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
            />
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/50 flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-background transition-colors"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto flex-1">
          {step === 0 && (
            <>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Nome *</label>
                <Input placeholder="Seu nome completo" value={formData.nome} onChange={(e) => handleChange("nome", e.target.value)} maxLength={100} required />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Telefone *</label>
                <Input placeholder="(43) 9 9999-9999" value={formData.telefone} onChange={(e) => handleChange("telefone", e.target.value)} maxLength={20} required />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">E-mail *</label>
                <Input type="email" placeholder="seu@email.com" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} maxLength={255} required />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Idade</label>
                <Input type="number" placeholder="Sua idade" value={formData.idade} onChange={(e) => handleChange("idade", e.target.value)} min={5} max={120} />
              </div>
            </>
          )}

          {step === 1 && (
            <>
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
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Quantas vezes por semana você conseguiria treinar?</label>
                <div className="flex gap-2">
                  {["2x", "3x", "4x ou mais"].map((opt) => (
                    <ToggleChip key={opt} label={opt} selected={formData.frequencia === opt} onClick={() => toggleSingle("frequencia", opt)} />
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Qual turno você prefere?</label>
                <div className="flex gap-2">
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
            </>
          )}

          {/* Navigation */}
          <div className="flex gap-3 pt-2">
            {step > 0 && (
              <Button type="button" variant="outline" onClick={() => setStep((s) => s - 1)} className="flex-1">
                <ChevronLeft className="w-4 h-4 mr-1" /> Voltar
              </Button>
            )}
            {step < totalSteps - 1 ? (
              <Button type="button" onClick={handleNext} className="flex-1 bg-primary hover:bg-primary/90">
                Próximo <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold uppercase tracking-wide py-3 rounded-full text-base"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <MessageCircle className="w-5 h-5 mr-2" />}
                {isLoading ? "Enviando..." : "Continuar no WhatsApp"}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default WhatsAppFormModal;
