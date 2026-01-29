import { Button } from "@/components/ui/button";
import { MessageCircle, Clock } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5543991080383?text=Olá! Gostaria de agendar uma aula experimental.";

const ScheduleSection = () => {
  const crossfitTimes = ["06h", "07h", "08h", "11h", "16h", "17h30", "18h30", "19h30"];
  const cfa4girlsTime = "13h10";

  return (
    <section id="horarios" className="section-padding bg-card">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            <span className="text-foreground">Horários que cabem na sua </span>
            <span className="text-gradient">rotina.</span>
            <br />
            <span className="text-gradient">Não tem desculpa.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Escolha o melhor horário e venha viver a experiência.
          </p>
        </div>

        {/* Schedule Cards */}
        <div className="max-w-3xl mx-auto space-y-5 mb-10">
          {/* CrossFit */}
          <div className="bg-secondary/50 border border-border rounded-xl p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">CrossFit</h3>
                <p className="text-sm text-muted-foreground">Segunda a Sexta</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {crossfitTimes.map((time) => (
                <div
                  key={time}
                  className="px-4 py-2 bg-background border border-border rounded-lg text-center hover:border-primary/50 transition-colors"
                >
                  <span className="font-display text-sm font-bold text-foreground">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CFA4Girls */}
          <div className="bg-secondary/50 border border-primary/30 rounded-xl p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">CFA4Girls</h3>
                <p className="text-sm text-muted-foreground">Exclusivo Feminino • Segunda a Sexta</p>
              </div>
              <span className="ml-auto bg-primary/10 text-primary text-xs font-bold uppercase px-2 py-0.5 rounded-full">
                Exclusivo
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="px-5 py-3 bg-primary/10 border border-primary/30 rounded-lg text-center">
                <span className="font-display text-lg font-bold text-primary">{cfa4girlsTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="cta-button text-sm">
              <MessageCircle className="w-4 h-4" />
              Agendar Aula no WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
