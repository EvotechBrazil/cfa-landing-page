const planosTodos = "/box/planos-todos.png";

const planLinks = {
  mensal: "https://venda.nextfit.com.br/413736c1-7369-4af0-8a6c-838118fbb371/contratos",
  trimestral: "https://venda.nextfit.com.br/413736c1-7369-4af0-8a6c-838118fbb371/contratos",
  semestral: "https://venda.nextfit.com.br/413736c1-7369-4af0-8a6c-838118fbb371/contratos",
};
const PlansSection = () => {
  return (
    <section id="planos" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-xs">Planos</span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-6 text-foreground">
            Conheça Nossos Planos
          </h2>
          <p className="text-foreground/70 text-sm">
            Escolha o plano ideal para você e comece sua transformação hoje mesmo.
          </p>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <img
            src={planosTodos}
            alt="Planos CFA"
            className="w-full h-auto rounded-2xl shadow-lg object-contain"
          />
          {/* Áreas clicáveis com hover zoom individual */}
          <div className="absolute inset-0 grid grid-cols-3 gap-0">
            <a
              href={planLinks.mensal}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full rounded-l-2xl cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-10 hover:shadow-glow"
              style={{ transformOrigin: "center center" }}
              aria-label="Plano Mensal"
            />
            <a
              href={planLinks.trimestral}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-10 hover:shadow-glow"
              style={{ transformOrigin: "center center" }}
              aria-label="Plano Trimestral"
            />
            <a
              href={planLinks.semestral}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full rounded-r-2xl cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-10 hover:shadow-glow"
              style={{ transformOrigin: "center center" }}
              aria-label="Plano Semestral"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default PlansSection;
