import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Dumbbell, TrendingUp, Target } from "lucide-react";

const BlogSection = () => {
  const articles = [
    {
      icon: Heart,
      category: "Saúde e bem-estar",
      title: "Como o CrossFit melhora sua qualidade de vida",
      excerpt: "Descubra os benefícios físicos e mentais do treino funcional.",
    },
    {
      icon: Dumbbell,
      category: "CrossFit para iniciantes",
      title: "Tudo que você precisa saber antes de começar",
      excerpt: "Guia completo para quem quer iniciar no CrossFit.",
    },
    {
      icon: TrendingUp,
      category: "Emagrecimento e performance",
      title: "Por que o CrossFit é eficiente para emagrecer",
      excerpt: "Entenda como os treinos intensos aceleram resultados.",
    },
    {
      icon: Target,
      category: "Motivação e disciplina",
      title: "Como manter a constância nos treinos",
      excerpt: "Dicas práticas para não desistir dos seus objetivos.",
    },
  ];

  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            <span className="text-foreground">Conteúdo que gera </span>
            <span className="text-gradient">resultado.</span>
            <br />
            <span className="text-foreground">Dentro e fora do </span>
            <span className="text-gradient">Box.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            Informação certa muda decisões. Aprenda sobre treino, saúde, constância e qualidade de vida.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover-lift cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <article.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">{article.category}</span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-0.5 mb-1.5 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">{article.excerpt}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="cta-button-outline text-sm">
            Acessar Blog
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
