import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5543991080383?text=Olá! Gostaria de saber mais sobre os horários.";

const ScheduleSection = () => {
  const schedule = {
    crossfit: ["06h", "07h", "08h", "11h", "16h", "17h30", "18h30", "19h30"],
    cfa4girls: "13h10",
  };

  return (
    <section id="horarios" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Horários</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
            Horários que Cabem na Sua Rotina
          </h2>
          <p className="text-foreground/70">
            Temos aulas de segunda a sexta em diversos horários para você não ter desculpa.
          </p>
        </div>

        {/* Schedule Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* CrossFit */}
          <div className="bg-background border border-border rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">CrossFit</h3>
                <p className="text-foreground/60">Segunda a Sexta</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {schedule.crossfit.map((time) => (
                <div
                  key={time}
                  className="px-6 py-3 bg-card border border-border rounded-xl text-center hover:border-primary/50 transition-colors"
                >
                  <span className="font-display text-lg font-bold text-foreground">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CFA4Girls */}
          <div className="bg-background border border-primary/30 rounded-2xl p-8">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">CFA4Girls</h3>
                  <p className="text-foreground/60">Exclusivo Feminino • Segunda a Sexta</p>
                </div>
              </div>
              <span className="bg-primary/10 text-primary text-xs font-bold uppercase px-4 py-2 rounded-full">
                Exclusivo
              </span>
            </div>
            
            <div className="inline-block px-8 py-4 bg-primary/10 border border-primary/30 rounded-xl">
              <span className="font-display text-2xl font-bold text-primary">{schedule.cfa4girls}</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide px-10 py-4 rounded-full">
              Escolher Meu Horário
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
