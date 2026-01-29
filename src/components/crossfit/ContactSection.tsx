import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Contato</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
            Venha Nos Visitar
          </h2>
          <p className="text-foreground/70">
            Estamos prontos para receber você e apresentar nosso espaço.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Phone */}
          <a 
            href="tel:+5543991080383"
            className="group bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300"
          >
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Telefone</h3>
            <p className="text-foreground/70">(43) 9 9108-0383</p>
          </a>

          {/* Location */}
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Localização</h3>
            <p className="text-foreground/70">Arapongas - PR</p>
          </div>

          {/* Hours */}
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Horário</h3>
            <p className="text-foreground/70">Segunda a Sexta<br />06h às 20h</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <a
            href="#"
            className="w-14 h-14 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Instagram className="w-6 h-6 text-foreground" />
          </a>
          <a
            href="#"
            className="w-14 h-14 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Facebook className="w-6 h-6 text-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
