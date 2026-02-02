import planosTodos from "@/assets/planos-todos.png";

const PlansSection = () => {
  // Links dos planos - serão atualizados com os links reais
  const planLinks = {
    mensal: "#", // LINK 1 - Plano Mensal
    trimestral: "#", // LINK 3 - Plano Trimestral
    semestral: "#", // LINK 2 - Plano Semestral
  };

  return (
    <section id="planos" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-xs">Planos</span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-6 text-foreground">
            Conheça Nossos Planos
          </h2>
          <p className="text-foreground/70 text-sm">
            Escolha o plano ideal para você e comece sua transformação hoje mesmo.
          </p>
        </div>

        {/* Plans Image with clickable areas - 30% menor */}
        <div className="relative max-w-3xl mx-auto">
          <img
            src={planosTodos}
            alt="Planos CFA"
            className="w-full h-auto rounded-2xl shadow-lg object-contain"
            style={{ imageRendering: 'auto' }}
          />
          
          {/* Áreas clicáveis invisíveis sobre cada plano */}
          {/* A imagem tem 3 planos lado a lado: Mensal | Trimestral | Semestral */}
          <div className="absolute inset-0 grid grid-cols-3 gap-0">
            <a
              href={planLinks.mensal}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full hover:bg-primary/10 transition-colors duration-300 rounded-l-2xl cursor-pointer"
              aria-label="Plano Mensal"
            />
            <a
              href={planLinks.trimestral}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full hover:bg-primary/10 transition-colors duration-300 cursor-pointer"
              aria-label="Plano Trimestral"
            />
            <a
              href={planLinks.semestral}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full hover:bg-primary/10 transition-colors duration-300 rounded-r-2xl cursor-pointer"
              aria-label="Plano Semestral"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
