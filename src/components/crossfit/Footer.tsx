import logoCFA from "@/assets/logo-cfa.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary/40 shadow-md shadow-primary/20 bg-background/80 p-0.5">
              <img 
                src={logoCFA} 
                alt="CrossFit Arapongas" 
                className="h-full w-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Copyright */}
          <p className="text-foreground/50 text-sm text-center">
            © {currentYear} CrossFit Arapongas. Todos os direitos reservados.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#inicio" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
