import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoCFA from "@/assets/logo-cfa.jpeg";

const WHATSAPP_LINK = "https://wa.me/5543991080383?text=Olá! Gostaria de agendar uma aula experimental.";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Por que CrossFit", href: "#porque" },
    { label: "Tour", href: "#tour" },
    { label: "Turmas", href: "#turmas" },
    { label: "Horários", href: "#horarios" },
    { label: "Blog", href: "#blog" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between h-14 md:h-16 px-4">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <img 
              src={logoCFA} 
              alt="CrossFit Arapongas" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Phone - Desktop */}
            <a
              href="tel:+5543991080383"
              className="hidden md:flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              (43) 9 9108-0383
            </a>

            {/* CTA Button */}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="hidden sm:flex cta-button text-xs px-3 py-1.5 h-auto">
                Agendar Aula
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-slide-up">
            <nav className="flex flex-col py-3 px-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors border-b border-border/50 last:border-0"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3"
              >
                <Button className="w-full cta-button text-sm">
                  Agendar Aula Experimental
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
