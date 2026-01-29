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
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Horários que cabem na sua </span>
            <span className="text-gradient">rotina.</span>
            <br />
            <span className="text-gradient">Não tem desculpa.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Escolha o melhor horário e venha viver a experiência.
          </p>
        </div>

        {/* Schedule Cards */}
        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {/* CrossFit */}
          <div className="bg-secondary/50 border border-border rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">CrossFit</h3>
                <p className="text-muted-foreground">Segunda a Sexta</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {crossfitTimes.map((time) => (
                <div
                  key={time}
                  className="px-5 py-3 bg-background border border-border rounded-lg text-center hover:border-primary/50 transition-colors"
                >
                  <span className="font-display text-lg font-bold text-foreground">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CFA4Girls */}
          <div className="bg-secondary/50 border border-primary/30 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">CFA4Girls</h3>
                <p className="text-muted-foreground">Exclusivo Feminino • Segunda a Sexta</p>
              </div>
              <span className="ml-auto bg-primary/10 text-primary text-xs font-bold uppercase px-3 py-1 rounded-full">
                Exclusivo
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="px-6 py-4 bg-primary/10 border border-primary/30 rounded-lg text-center">
                <span className="font-display text-xl font-bold text-primary">{cfa4girlsTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="cta-button text-lg">
              <MessageCircle className="w-5 h-5" />
              Agendar Aula no WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
