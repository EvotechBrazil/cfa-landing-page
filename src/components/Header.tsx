import { Phone, Mail, MapPin, Menu, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/logo.jpeg";

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
          <div className="flex items-center justify-between h-9 text-xs">
            <div className="hidden md:flex items-center gap-5 text-muted-foreground">
              <a href="tel:+5511999999999" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Phone className="w-3 h-3" />
                (11) 99999-9999
              </a>
              <a href="mailto:contato@autoshop.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Mail className="w-3 h-3" />
                contato@autoshop.com
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="w-3 h-3" />
              <span className="hidden sm:inline">São Paulo, SP</span>
              <span className="sm:hidden">SP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="AutoShop Logo" 
                className="h-10 lg:h-12 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="hidden sm:flex h-8 w-8">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="whatsapp" size="sm" className="hidden sm:flex text-xs h-8 px-3">
                <Phone className="w-3.5 h-3.5" />
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
