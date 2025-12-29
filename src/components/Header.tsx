import { Phone, Mail, MapPin, Menu, Heart, Car, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#" },
    { label: "Estoque", href: "#estoque" },
    { label: "Marcas", href: "#marcas" },
    { label: "Financiamento", href: "#financiamento" },
    { label: "Test Drive", href: "#testdrive" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="hidden md:flex items-center gap-6 text-muted-foreground">
              <a href="tel:+5511999999999" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-3.5 h-3.5" />
                (11) 99999-9999
              </a>
              <a href="mailto:contato@autoshop.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5" />
                contato@autoshop.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">São Paulo, SP</span>
              <span className="sm:hidden">SP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-dark rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xl lg:text-2xl font-black tracking-tight text-foreground">AUTO</span>
                <span className="text-xl lg:text-2xl font-black tracking-tight text-primary">SHOP</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="whatsapp" size="sm" className="hidden sm:flex">
                <Phone className="w-4 h-4" />
                WhatsApp
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-slide-up">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="whatsapp" className="mt-2">
                <Phone className="w-4 h-4" />
                WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
