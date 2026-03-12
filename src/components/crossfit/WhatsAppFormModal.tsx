import { useState } from "react";
import { X, Loader2, MessageCircle, Check } from "lucide-react";
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

const CheckboxOption = ({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) => (
  <button type="button" onClick={onChange} className="flex items-center gap-2 cursor-pointer group w-full text-left">
    <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
      checked ? "bg-primary border-primary" : "border-muted-foreground/40 group-hover:border-primary/60"
    }`}>
      {checked && <Check className="w-3 h-3 text-primary-foreground" />}
    </div>
    <span className="text-xs text-foreground/80">{label}</span>
  </button>
);

const RadioOption = ({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) => (
  <button type="button" onClick={onChange} className="flex items-center gap-2 cursor-pointer group w-full text-left">
    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
      checked ? "border-primary" : "border-muted-foreground/40 group-hover:border-primary/60"
    }`}>
      {checked && <div className="w-2 h-2 rounded-full bg-primary" />}
    </div>
    <span className="text-xs text-foreground/80">{label}</span>
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
      return { ...prev, [field]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value] };
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
    <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 animate-fade-in" onClick={onClose}>
      <div className="relative w-full max-w-md bg-card border border-border rounded-xl shadow-2xl animate-scale-in overflow-hidden max-h-[85vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-primary/10 px-4 py-3 border-b border-border shrink-0">
          <h3 className="font-display text-base font-bold text-foreground">Quase lá! 💪</h3>
          <p className="text-foreground/60 text-xs mt-0.5">Preencha para continuarmos no WhatsApp.</p>
          <button onClick={onClose} className="absolute top-3 right-3 w-7 h-7 rounded-full bg-background/50 flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-background transition-colors" aria-label="Fechar">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} onKeyDown={(e) => { if (e.key === "Enter" && !(e.target instanceof HTMLTextAreaElement)) e.preventDefault(); }} className="px-4 py-3 space-y-3 overflow-y-auto flex-1">
          {/* Nome */}
          <div>
            <label className="text-xs font-medium text-foreground mb-1 block">Nome completo *</label>
            <Input className="h-8 text-sm" placeholder="Seu nome completo" value={formData.nome} onChange={(e) => handleChange("nome", e.target.value)} maxLength={100} />
          </div>

          {/* Telefone */}
          <div>
            <label className="text-xs font-medium text-foreground mb-1 block">Telefone (WhatsApp) *</label>
            <Input className="h-8 text-sm" placeholder="(00) 00000-0000" value={formData.telefone} onChange={(e) => {
              const raw = e.target.value.replace(/\D/g, "").slice(0, 11);
              const formatted = raw.length > 6 ? `(${raw.slice(0,2)}) ${raw.slice(2,7)}-${raw.slice(7)}` : raw.length > 2 ? `(${raw.slice(0,2)}) ${raw.slice(2)}` : raw;
              handleChange("telefone", formatted);
            }} maxLength={15} />
          </div>

          <div>
            <label className="text-xs font-medium text-foreground mb-1 block">O que você quer melhorar?</label>
            <div className="space-y-1.5">
              {["Emagrecer", "Condicionamento físico", "Ganhar força", "Performance esportiva", "Saúde / Qualidade de vida"].map((opt) => (
                <CheckboxOption key={opt} label={opt} checked={formData.objetivos.includes(opt)} onChange={() => toggleMulti("objetivos", opt)} />
              ))}
            </div>
          </div>

          {/* Rotina */}
          <div>
            <label className="text-xs font-medium text-foreground mb-1 block">Como é sua rotina de trabalho?</label>
            <Input className="h-8 text-sm" placeholder="Ex: trabalho das 8h às 17h" value={formData.rotina} onChange={(e) => handleChange("rotina", e.target.value)} maxLength={200} />
          </div>

          {/* Meta */}
          <div>
            <label className="text-xs font-medium text-foreground mb-1 block">Qual é sua meta?</label>
            <Textarea placeholder="Conte um pouco..." value={formData.meta} onChange={(e) => handleChange("meta", e.target.value)} maxLength={500} className="min-h-[50px] text-sm" />
          </div>

          {/* Obstáculos */}
          <div>
            <label className="text-xs font-medium text-foreground mb-1 block">O que mais te atrapalha hoje?</label>
            <div className="space-y-1.5">
              {["Falta de tempo", "Insegurança / nunca treinei", "Dores ou limitações físicas", "Custo", "Distância"].map((opt) => (
                <CheckboxOption key={opt} label={opt} checked={formData.obstaculos.includes(opt)} onChange={() => toggleMulti("obstaculos", opt)} />
              ))}
            </div>
          </div>

          {/* Frequência */}
          <div>
            <label className="text-xs font-medium text-foreground mb-1 block">Qual a sua disponibilidade para treinar?</label>
            <div className="space-y-1.5">
              {["2x", "3x", "4x ou mais"].map((opt) => (
                <RadioOption key={opt} label={opt} checked={formData.frequencia === opt} onChange={() => toggleSingle("frequencia", opt)} />
              ))}
            </div>
          </div>

          {/* Turno */}
          <div>
            <label className="text-xs font-medium text-foreground mb-1 block">Qual turno você prefere?</label>
            <div className="space-y-1.5">
              {["Manhã", "Tarde", "Noite"].map((opt) => (
                <RadioOption key={opt} label={opt} checked={formData.turno === opt} onChange={() => toggleSingle("turno", opt)} />
              ))}
            </div>
          </div>

          {/* Treina atualmente */}
          <div>
            <label className="text-xs font-medium text-foreground mb-1 block">Você já treina atualmente?</label>
            <div className="space-y-1.5">
              {["Sim, treino regularmente", "Treinei antes, mas parei", "Estou começando do zero"].map((opt) => (
                <RadioOption key={opt} label={opt} checked={formData.treinando === opt} onChange={() => toggleSingle("treinando", opt)} />
              ))}
            </div>
          </div>

          {/* Como encontrou */}
          <div>
            <label className="text-xs font-medium text-foreground mb-1 block">Como você nos encontrou?</label>
            <div className="space-y-1.5">
              {["Instagram", "Indicação de amigo/conhecido", "Vi a academia na cidade", "Outro"].map((opt) => (
                <RadioOption key={opt} label={opt} checked={formData.comoEncontrou === opt} onChange={() => toggleSingle("comoEncontrou", opt)} />
              ))}
            </div>
          </div>

          <Button type="submit" variant="whatsapp" disabled={isLoading} className="w-full font-bold uppercase tracking-wide py-2.5 rounded-full text-sm">
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <MessageCircle className="w-4 h-4 mr-2" />}
            {isLoading ? "Enviando..." : "Continuar no WhatsApp"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default WhatsAppFormModal;
