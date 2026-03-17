import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWhatsAppForm } from "./WhatsAppFormContext";
import beforeAfter1 from "@/assets/before-after-1.png";
import beforeAfter2 from "@/assets/before-after-2.png";
import beforeAfter3 from "@/assets/before-after-3.png";
import beforePhoto from "@/assets/before-after-4.png";
import afterPhoto from "@/assets/before-after-5.png";

const testimonials = [
  {
    id: 1,
    name: "Aluno CFA",
    age: null,
    text: "Transformação real através do CrossFit. Dedicação, consistência e o apoio da equipe CFA fazem toda a diferença!",
    rating: 5,
    compositeImage: beforeAfter1,
  },
  {
    id: 2,
    name: "Aluno CFA",
    age: null,
    text: "Resultado incrível com treino e disciplina. O CrossFit transforma corpo e mente!",
    rating: 5,
    compositeImage: beforeAfter2,
  },
  {
    id: 3,
    name: "Aluno CFA",
    age: null,
    text: "Superação e evolução constante. Cada treino é uma vitória!",
    rating: 5,
    compositeImage: beforeAfter3,
  },
  {
    id: 4,
    name: "Aluno CFA",
    age: null,
    text: "Dedicação e disciplina trazem resultados reais. O CFA transforma vidas!",
    rating: 5,
    compositeImage: null,
    beforeImage: beforePhoto,
    afterImage: afterPhoto,
  },
  {
    id: 5,
    name: "Pedro Oliveira",
    age: 35,
    text: "O suporte dos coaches é fantástico. Eles adaptam os treinos para cada pessoa e isso faz toda a diferença.",
    rating: 5,
    compositeImage: null,
    beforeImage: null,
    afterImage: null,
  },
];


const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { openForm } = useWhatsAppForm();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-xs uppercase tracking-widest">
            Transformações Reais
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-2">
            Depoimentos e Resultados
          </h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-xl mx-auto">
            Veja as histórias de superação dos nossos alunos e suas incríveis transformações
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 relative shadow-card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Before/After Images */}
               <div className="relative">
                {currentTestimonial.compositeImage ? (
                  <div className="bg-muted rounded-xl overflow-hidden flex items-center justify-center">
                    <img
                      src={currentTestimonial.compositeImage}
                      alt={`${currentTestimonial.name} - Transformação`}
                      className="w-[90%] h-auto object-contain"
                    />
                  </div>
                ) : currentTestimonial.beforeImage && currentTestimonial.afterImage ? (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <div className="aspect-[3/4] bg-muted rounded-xl overflow-hidden">
                        <img src={currentTestimonial.beforeImage} alt="Antes" className="w-full h-full object-cover" />
                      </div>
                      <span className="absolute bottom-2 left-2 bg-background/90 text-foreground text-[10px] font-bold px-2 py-1 rounded">
                        ANTES
                      </span>
                    </div>
                    <div className="relative">
                      <div className="aspect-[3/4] bg-muted rounded-xl overflow-hidden border-2 border-primary">
                        <img src={currentTestimonial.afterImage} alt="Depois" className="w-full h-full object-cover" />
                      </div>
                      <span className="absolute bottom-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded">
                        DEPOIS
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <div className="aspect-[3/4] bg-muted rounded-xl overflow-hidden flex items-center justify-center">
                        <span className="text-muted-foreground text-xs">Foto antes</span>
                      </div>
                      <span className="absolute bottom-2 left-2 bg-background/90 text-foreground text-[10px] font-bold px-2 py-1 rounded">
                        ANTES
                      </span>
                    </div>
                    <div className="relative">
                      <div className="aspect-[3/4] bg-muted rounded-xl overflow-hidden border-2 border-primary flex items-center justify-center">
                        <span className="text-muted-foreground text-xs">Foto depois</span>
                      </div>
                      <span className="absolute bottom-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded">
                        DEPOIS
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Testimonial Content */}
              <div className="text-center md:text-left">
                <Quote className="w-8 h-8 text-primary mb-4 mx-auto md:mx-0 opacity-50" />
                
                <p className="text-foreground text-sm md:text-base leading-relaxed mb-6 italic">
                  "{currentTestimonial.text}"
                </p>

                {/* Rating */}
                <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Author */}
                <div>
                  <p className="text-foreground font-bold text-sm">
                    {currentTestimonial.name}
                  </p>
                  {currentTestimonial.age && (
                    <p className="text-muted-foreground text-xs">
                      {currentTestimonial.age} anos
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground h-10 w-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground h-10 w-10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground text-xs mb-4">
            Pronto para sua transformação?
          </p>
          <a
            href="https://wa.me/5511999999999?text=Olá! Quero começar minha transformação no CFA!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide px-8 py-3 rounded-full text-sm">
              Começar Agora
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
