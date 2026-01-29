import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer id="contato" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-5">
              <img 
                src={logo} 
                alt="AutoShop Logo" 
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-muted-foreground mb-5">
              Há mais de 15 anos realizando o sonho de milhares de clientes com as melhores condições do mercado.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="w-8 h-8 bg-muted hover:bg-primary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-muted hover:bg-primary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-muted hover:bg-primary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all duration-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {["Estoque Completo", "Financiamento", "Test Drive", "Sobre Nós", "Blog"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-2">
              {["Veículos Zero Km", "Seminovos", "Avaliação de Usados", "Financiamento", "Consórcio"].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+5511999999999"
                  className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-primary" />
                  <div>
                    <div className="text-xs font-medium text-foreground">(11) 99999-9999</div>
                    <div className="text-[10px]">WhatsApp disponível</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@autoshop.com"
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  contato@autoshop.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                  <div>
                    Av. Paulista, 1000<br />
                    São Paulo - SP
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © 2024 AutoShop. Todos os direitos reservados.
          </p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
