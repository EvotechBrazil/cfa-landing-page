import { Phone, Instagram, Facebook } from "lucide-react";
import logoCFA from "@/assets/logo-cfa.jpeg";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="container-custom mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-3">
              <img 
                src={logoCFA} 
                alt="CrossFit Arapongas" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Transformando vidas através do movimento.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <Phone className="w-4 h-4 text-primary" />
              <a
                href="tel:+5543991080383"
                className="font-display text-lg font-bold text-foreground hover:text-primary transition-colors"
              >
                (43) 9 9108-0383
              </a>
            </div>
            <p className="text-xs text-muted-foreground">Arapongas - PR</p>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-4 h-4 text-foreground" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-4 h-4 text-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CrossFit Arapongas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
