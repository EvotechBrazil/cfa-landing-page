import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const TourSection = () => {
  return (
    <section id="tour" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">
            Conheça Nosso Espaço
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
            Tour Pelo Box
          </h2>
          
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Mais do que uma academia, um lugar onde você vai descobrir do que é capaz. 
            <strong className="text-primary"> Venha conhecer onde sua transformação começa.</strong>
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-card border border-border bg-card">
            <AspectRatio ratio={16 / 9}>
              {/* Video Placeholder - Replace with actual video later */}
              <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex flex-col items-center justify-center">
                {/* Play Button */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1 group-hover:scale-110 transition-transform" />
                </div>
                
                <p className="mt-6 text-foreground/60 text-sm md:text-base font-medium">
                  Vídeo em breve
                </p>
              </div>
            </AspectRatio>
          </div>
          
          {/* Caption */}
          <p className="text-center mt-6 text-muted-foreground text-sm">
            🏋️ Equipamentos de alta performance • Ambiente motivador • Comunidade acolhedora
          </p>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
