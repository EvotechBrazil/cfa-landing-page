import { Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container-custom mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="font-display text-xl font-bold text-primary-foreground">CFA</span>
              </div>
              <div>
                <span className="font-display text-lg font-bold text-foreground">CROSSFIT</span>
                <span className="font-display text-lg font-bold text-primary ml-1">ARAPONGAS</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Transformando vidas através do movimento.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Phone className="w-5 h-5 text-primary" />
              <a
                href="tel:+5543991080383"
                className="font-display text-xl font-bold text-foreground hover:text-primary transition-colors"
              >
                (43) 9 9108-0383
              </a>
            </div>
            <p className="text-sm text-muted-foreground">Arapongas - PR</p>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CrossFit Arapongas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
