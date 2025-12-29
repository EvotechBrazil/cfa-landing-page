import { Heart, Fuel, Gauge, Calendar, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VehicleCardProps {
  vehicle: {
    id: number;
    brand: string;
    model: string;
    version: string;
    year: string;
    mileage: number;
    price: number;
    image: string;
    condition: "zero" | "seminovo" | "usado";
    fuel: string;
    transmission: string;
    featured?: boolean;
    superOffer?: boolean;
  };
}

const conditionConfig = {
  zero: { label: "Zero Km", class: "bg-primary text-primary-foreground" },
  seminovo: { label: "Seminovo", class: "bg-blue-500 text-white" },
  usado: { label: "Usado", class: "bg-muted text-muted-foreground" },
};

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const condition = conditionConfig[vehicle.condition];

  return (
    <article className="group bg-card border border-border rounded-2xl overflow-hidden hover-lift">
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className={`badge-status ${condition.class}`}>
            {condition.label}
          </span>
          {vehicle.superOffer && (
            <span className="badge-status bg-red-500 text-white animate-pulse">
              Super Oferta
            </span>
          )}
          {vehicle.featured && (
            <span className="badge-status bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
              Destaque
            </span>
          )}
        </div>

        {/* Favorite button */}
        <button className="absolute top-3 right-3 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-muted-foreground hover:text-red-500 hover:bg-background transition-all duration-200">
          <Heart className="w-5 h-5" />
        </button>

        {/* Quick view on hover */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <Button variant="hero" className="w-full" size="sm">
            Ver Detalhes
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
            {vehicle.brand} {vehicle.model}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-1">{vehicle.version}</p>
        </div>

        {/* Specs grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{vehicle.year}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Gauge className="w-4 h-4 text-primary" />
            <span>{vehicle.mileage.toLocaleString("pt-BR")} km</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Fuel className="w-4 h-4 text-primary" />
            <span>{vehicle.fuel}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Settings className="w-4 h-4 text-primary" />
            <span>{vehicle.transmission}</span>
          </div>
        </div>

        {/* Price */}
        <div className="pt-3 border-t border-border">
          <div className="text-xs text-muted-foreground mb-1">A partir de</div>
          <div className="text-2xl font-black text-primary">
            R$ {vehicle.price.toLocaleString("pt-BR")}
          </div>
        </div>
      </div>
    </article>
  );
};

export default VehicleCard;
