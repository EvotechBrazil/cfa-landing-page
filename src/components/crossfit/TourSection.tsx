import { Button } from "@/components/ui/button";
import { MessageCircle, Play } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5543991080383?text=Olá! Gostaria de agendar uma visita ao Box.";

const TourSection = () => {
  const galleryItems = [
    { title: "Área de Treino", description: "Espaço amplo e equipado" },
    { title: "Equipamentos", description: "Material de alta qualidade" },
    { title: "Comunidade", description: "Atletas em ação" },
    { title: "Coaches", description: "Orientação profissional" },
  ];

  return (
    <section id="tour" className="section-padding bg-card">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Conheça o lugar onde a </span>
            <span className="text-gradient">transformação acontece.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estrutura completa, energia lá em cima e um ambiente feito para você dar o seu máximo.
            Veja o Box por dentro e entenda por que tanta gente escolhe treinar aqui.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative aspect-square bg-secondary rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <span className="font-display text-2xl font-bold text-primary">{index + 1}</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Placeholder */}
        <div className="relative aspect-video bg-secondary rounded-2xl overflow-hidden border border-border mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-primary-foreground ml-1" />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
            <h3 className="font-display text-xl font-bold text-foreground">Tour Virtual pelo Box</h3>
            <p className="text-muted-foreground">Veja nossa estrutura em ação</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="cta-button">
              <MessageCircle className="w-5 h-5" />
              Agendar Visita / Aula Experimental
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
