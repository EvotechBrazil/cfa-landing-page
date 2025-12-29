import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter, X, ChevronDown } from "lucide-react";

const brands = [
  { id: "fiat", name: "Fiat" },
  { id: "volkswagen", name: "Volkswagen" },
  { id: "chevrolet", name: "Chevrolet" },
  { id: "ford", name: "Ford" },
  { id: "honda", name: "Honda" },
  { id: "toyota", name: "Toyota" },
  { id: "hyundai", name: "Hyundai" },
  { id: "renault", name: "Renault" },
];

const conditions = [
  { id: "zero", label: "Zero Km", color: "bg-primary" },
  { id: "seminovo", label: "Seminovo", color: "bg-blue-500" },
  { id: "usado", label: "Usado", color: "bg-muted-foreground" },
];

const SearchFilters = () => {
  const [priceRange, setPriceRange] = useState([25000, 150000]);
  const [mileageRange, setMileageRange] = useState([0, 150000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleBrand = (brandId: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId)
        ? prev.filter((id) => id !== brandId)
        : [...prev, brandId]
    );
  };

  const clearFilters = () => {
    setPriceRange([25000, 150000]);
    setMileageRange([0, 150000]);
    setSelectedBrands([]);
  };

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-primary" />
          <span className="font-semibold text-foreground">Filtros</span>
        </div>
        <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground">
          <X className="w-4 h-4 mr-1" />
          Limpar
        </Button>
      </div>

      {/* Condition */}
      <div className="filter-section">
        <h4 className="text-sm font-medium text-foreground mb-3">Estado</h4>
        <div className="flex flex-wrap gap-2">
          {conditions.map((condition) => (
            <button
              key={condition.id}
              className="flex items-center gap-2 px-3 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
            >
              <span className={`w-2 h-2 rounded-full ${condition.color}`}></span>
              <span className="text-sm text-foreground">{condition.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="filter-section">
        <h4 className="text-sm font-medium text-foreground mb-3">Marcas</h4>
        <div className="grid grid-cols-2 gap-2">
          {brands.slice(0, isExpanded ? brands.length : 6).map((brand) => (
            <label
              key={brand.id}
              className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all ${
                selectedBrands.includes(brand.id)
                  ? "bg-primary/10 border border-primary/30"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              <Checkbox
                checked={selectedBrands.includes(brand.id)}
                onCheckedChange={() => toggleBrand(brand.id)}
                className="border-muted-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <span className="text-sm text-foreground">{brand.name}</span>
            </label>
          ))}
        </div>
        {brands.length > 6 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-2 text-primary"
          >
            {isExpanded ? "Ver menos" : "Ver mais"}
            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
          </Button>
        )}
      </div>

      {/* Price Range */}
      <div className="filter-section">
        <h4 className="text-sm font-medium text-foreground mb-3">Valor</h4>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={300000}
          min={10000}
          step={5000}
          className="mb-3"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>R$ {priceRange[0].toLocaleString("pt-BR")}</span>
          <span>R$ {priceRange[1].toLocaleString("pt-BR")}</span>
        </div>
      </div>

      {/* Mileage Range */}
      <div className="filter-section">
        <h4 className="text-sm font-medium text-foreground mb-3">Quilometragem</h4>
        <Slider
          value={mileageRange}
          onValueChange={setMileageRange}
          max={200000}
          min={0}
          step={5000}
          className="mb-3"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{mileageRange[0].toLocaleString("pt-BR")} km</span>
          <span>{mileageRange[1].toLocaleString("pt-BR")} km</span>
        </div>
      </div>

      {/* Transmission */}
      <div className="filter-section">
        <h4 className="text-sm font-medium text-foreground mb-3">Câmbio</h4>
        <Select>
          <SelectTrigger className="bg-muted border-border">
            <SelectValue placeholder="Todos os câmbios" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="manual">Manual</SelectItem>
            <SelectItem value="automatic">Automático</SelectItem>
            <SelectItem value="cvt">CVT</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Fuel */}
      <div className="filter-section border-b-0">
        <h4 className="text-sm font-medium text-foreground mb-3">Combustível</h4>
        <Select>
          <SelectTrigger className="bg-muted border-border">
            <SelectValue placeholder="Todos os combustíveis" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="flex">Flex</SelectItem>
            <SelectItem value="gasoline">Gasolina</SelectItem>
            <SelectItem value="diesel">Diesel</SelectItem>
            <SelectItem value="electric">Elétrico</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Apply Button */}
      <div className="p-4">
        <Button variant="hero" className="w-full">
          Buscar Veículos
        </Button>
      </div>
    </div>
  );
};

export default SearchFilters;
