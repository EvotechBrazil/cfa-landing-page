import VehicleCard from "./VehicleCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";

const vehicles = [
  {
    id: 1,
    brand: "Fiat",
    model: "Pulse",
    version: "Audace 1.0 Turbo 200 Flex Aut.",
    year: "2024/2024",
    mileage: 0,
    price: 114990,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    condition: "zero" as const,
    fuel: "Flex",
    transmission: "Automático",
    featured: true,
    superOffer: true,
  },
  {
    id: 2,
    brand: "Volkswagen",
    model: "Polo",
    version: "Highline 200 TSI 1.0 Flex",
    year: "2023/2023",
    mileage: 18500,
    price: 98900,
    image: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?w=800&q=80",
    condition: "seminovo" as const,
    fuel: "Flex",
    transmission: "Automático",
  },
  {
    id: 3,
    brand: "Honda",
    model: "HR-V",
    version: "EXL 1.5 Turbo CVT",
    year: "2024/2024",
    mileage: 0,
    price: 189990,
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80",
    condition: "zero" as const,
    fuel: "Flex",
    transmission: "CVT",
    featured: true,
  },
  {
    id: 4,
    brand: "Chevrolet",
    model: "Tracker",
    version: "Premier 1.2 Turbo Aut.",
    year: "2022/2023",
    mileage: 35000,
    price: 129900,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
    condition: "seminovo" as const,
    fuel: "Flex",
    transmission: "Automático",
    superOffer: true,
  },
  {
    id: 5,
    brand: "Toyota",
    model: "Corolla Cross",
    version: "XRE 2.0 Flex Aut.",
    year: "2023/2024",
    mileage: 12000,
    price: 175900,
    image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80",
    condition: "seminovo" as const,
    fuel: "Flex",
    transmission: "Automático",
  },
  {
    id: 6,
    brand: "Hyundai",
    model: "Creta",
    version: "Limited 1.0 Turbo Aut.",
    year: "2024/2024",
    mileage: 0,
    price: 159990,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
    condition: "zero" as const,
    fuel: "Flex",
    transmission: "Automático",
  },
  {
    id: 7,
    brand: "Renault",
    model: "Kardian",
    version: "Intense 1.0 Turbo CVT",
    year: "2024/2024",
    mileage: 0,
    price: 129990,
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    condition: "zero" as const,
    fuel: "Flex",
    transmission: "CVT",
    featured: true,
  },
  {
    id: 8,
    brand: "Ford",
    model: "Bronco Sport",
    version: "Wildtrak 2.0 Turbo 4WD",
    year: "2023/2023",
    mileage: 28000,
    price: 249900,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    condition: "seminovo" as const,
    fuel: "Gasolina",
    transmission: "Automático",
    superOffer: true,
  },
];

const VehicleGrid = () => {
  return (
    <div className="flex-1">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5">
        <div>
          <h2 className="text-xl font-bold text-foreground">Veículos Disponíveis</h2>
          <p className="text-xs text-muted-foreground">{vehicles.length} veículos encontrados</p>
        </div>

        <div className="flex items-center gap-2">
          <Select defaultValue="recent">
            <SelectTrigger className="w-[160px] bg-card border-border text-xs h-8">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Mais recentes</SelectItem>
              <SelectItem value="price-asc">Menor preço</SelectItem>
              <SelectItem value="price-desc">Maior preço</SelectItem>
              <SelectItem value="mileage">Menor km</SelectItem>
            </SelectContent>
          </Select>

          <div className="hidden sm:flex items-center gap-1 bg-card border border-border rounded-lg p-0.5">
            <Button variant="ghost" size="icon" className="h-7 w-7 bg-primary text-primary-foreground">
              <Grid3X3 className="w-3.5 h-3.5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <List className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {vehicles.map((vehicle, index) => (
          <div
            key={vehicle.id}
            className="animate-scale-in"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <VehicleCard vehicle={vehicle} />
          </div>
        ))}
      </div>

      {/* Load more */}
      <div className="flex justify-center mt-8">
        <Button variant="outline" size="default" className="text-sm">
          Carregar mais veículos
        </Button>
      </div>
    </div>
  );
};

export default VehicleGrid;
