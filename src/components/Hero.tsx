import { Button } from "@/components/ui/button";
import { Search, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-28">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHoiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
            <span className="text-xs font-medium text-primary">Novos veículos disponíveis</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5 animate-slide-up">
            <span className="text-foreground">Encontre o </span>
            <span className="text-gradient">Carro dos</span>
            <br />
            <span className="text-gradient">Seus Sonhos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Os melhores veículos novos, seminovos e usados com as melhores condições de financiamento do mercado.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" size="lg">
              <Search className="w-4 h-4" />
              Ver Estoque Completo
            </Button>
            <Button variant="outline" size="lg">
              Simular Financiamento
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {[
              { value: "500+", label: "Veículos" },
              { value: "15+", label: "Anos no Mercado" },
              { value: "10k+", label: "Clientes Satisfeitos" },
              { value: "48h", label: "Aprovação Rápida" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-primary mb-0.5">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
