import { Button } from "@/components/ui/button";
import logoCFA from "@/assets/logo-cfa.jpeg";

const WHATSAPP_LINK = "https://wa.me/5543991080383?text=Olá! Gostaria de conhecer mais sobre a CrossFit Arapongas.";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Logo */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-sm mx-auto">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-xl" />
              
              {/* Logo container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl shadow-primary/30 bg-gradient-to-br from-background via-card to-background p-4">
                <div className="w-full h-full rounded-full overflow-hidden bg-background/90 flex items-center justify-center p-6">
                  <img 
                    src={logoCFA} 
                    alt="CrossFit Arapongas" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Decorative accent */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full shadow-lg shadow-primary/50" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/70 rounded-full shadow-lg shadow-primary/30" />
            </div>
            
            {/* Background glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary/5 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Quem Somos</span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
              Transformando Vidas Através do Movimento
            </h2>
            
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                A CrossFit Arapongas nasceu com o propósito de transformar vidas através do treinamento funcional 
                de alta intensidade. Somos uma das referências em CrossFit na região, unindo pessoas de todas 
                as idades e níveis de condicionamento.
              </p>
              <p>
                Seguimos a metodologia oficial do CrossFit, que é comprovadamente o melhor programa de 
                condicionamento físico e força do mundo. Nosso diferencial está na <strong className="text-foreground">simplicidade, 
                empatia e excelência</strong> de atendimento de toda nossa equipe.
              </p>
              <p>
                Aqui você não treina sozinho. Você faz parte de uma <strong className="text-primary">comunidade</strong> que 
                celebra cada conquista e te apoia em cada desafio.
              </p>
            </div>

            <div className="mt-8">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide px-8 py-3 rounded-full">
                  Quero Conhecer
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
