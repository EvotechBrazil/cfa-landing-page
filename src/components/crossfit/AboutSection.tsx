import { Button } from "@/components/ui/button";
import lionWatermark from "@/assets/lion-watermark.png";
import { useWhatsAppForm } from "./WhatsAppFormContext";

const WHATSAPP_LINK = "https://wa.me/5543991080383?text=Olá! Gostaria de conhecer mais sobre a CrossFit Arapongas.";

const AboutSection = () => {
  const { openForm } = useWhatsAppForm();

  return (
    <section id="sobre" className="py-20 md:py-28 bg-card relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src={lionWatermark} alt="" className="w-[600px] h-auto opacity-[0.08] object-contain" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div>
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
              <Button
                onClick={() => openForm(WHATSAPP_LINK)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide px-8 py-3 rounded-full"
              >
                Quero Conhecer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
