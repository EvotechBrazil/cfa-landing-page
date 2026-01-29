const brands = [
  { name: "Fiat", logo: "https://www.carlogos.org/car-logos/fiat-logo-2020.png" },
  { name: "Volkswagen", logo: "https://www.carlogos.org/car-logos/volkswagen-logo-2019.png" },
  { name: "Chevrolet", logo: "https://www.carlogos.org/car-logos/chevrolet-logo-2013.png" },
  { name: "Ford", logo: "https://www.carlogos.org/car-logos/ford-logo-2017.png" },
  { name: "Honda", logo: "https://www.carlogos.org/car-logos/honda-logo.png" },
  { name: "Toyota", logo: "https://www.carlogos.org/car-logos/toyota-logo-2020.png" },
  { name: "Hyundai", logo: "https://www.carlogos.org/car-logos/hyundai-logo-2017.png" },
  { name: "Renault", logo: "https://www.carlogos.org/car-logos/renault-logo-2021.png" },
];

const BrandsSection = () => {
  return (
    <section id="marcas" className="py-12 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-3">
            Marcas <span className="text-gradient">Disponíveis</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com as principais montadoras do mercado para oferecer a você as melhores opções.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {brands.map((brand, index) => (
            <button
              key={brand.name}
              className="group flex flex-col items-center gap-2 p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-muted/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {brand.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
