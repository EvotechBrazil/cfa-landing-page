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
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Conteúdo que gera </span>
            <span className="text-gradient">resultado.</span>
            <br />
            <span className="text-foreground">Dentro e fora do </span>
            <span className="text-gradient">Box.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Informação certa muda decisões. Aprenda sobre treino, saúde, constância e qualidade de vida.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover-lift cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <article.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">{article.category}</span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{article.excerpt}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="cta-button-outline">
            Acessar Blog
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
