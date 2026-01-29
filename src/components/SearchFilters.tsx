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
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-border">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">Filtros</span>
        </div>
        <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs text-muted-foreground h-7">
          <X className="w-3.5 h-3.5 mr-1" />
          Limpar
        </Button>
      </div>

      {/* Condition */}
      <div className="p-3 border-b border-border">
        <h4 className="text-xs font-medium text-foreground mb-2">Estado</h4>
        <div className="flex flex-wrap gap-1.5">
          {conditions.map((condition) => (
            <button
              key={condition.id}
              className="flex items-center gap-1.5 px-2.5 py-1.5 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${condition.color}`}></span>
              <span className="text-xs text-foreground">{condition.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="p-3 border-b border-border">
        <h4 className="text-xs font-medium text-foreground mb-2">Marcas</h4>
        <div className="grid grid-cols-2 gap-1.5">
          {brands.slice(0, isExpanded ? brands.length : 6).map((brand) => (
            <label
              key={brand.id}
              className={`flex items-center gap-1.5 p-1.5 rounded-lg cursor-pointer transition-all ${
                selectedBrands.includes(brand.id)
                  ? "bg-primary/10 border border-primary/30"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              <Checkbox
                checked={selectedBrands.includes(brand.id)}
                onCheckedChange={() => toggleBrand(brand.id)}
                className="h-3.5 w-3.5 border-muted-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <span className="text-xs text-foreground">{brand.name}</span>
            </label>
          ))}
        </div>
        {brands.length > 6 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-1.5 text-primary text-xs h-7"
          >
            {isExpanded ? "Ver menos" : "Ver mais"}
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
          </Button>
        )}
      </div>

      {/* Price Range */}
      <div className="p-3 border-b border-border">
        <h4 className="text-xs font-medium text-foreground mb-2">Valor</h4>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={300000}
          min={10000}
          step={5000}
          className="mb-2"
        />
        <div className="flex justify-between text-[10px] text-muted-foreground">
          <span>R$ {priceRange[0].toLocaleString("pt-BR")}</span>
          <span>R$ {priceRange[1].toLocaleString("pt-BR")}</span>
        </div>
      </div>

      {/* Mileage Range */}
      <div className="p-3 border-b border-border">
        <h4 className="text-xs font-medium text-foreground mb-2">Quilometragem</h4>
        <Slider
          value={mileageRange}
          onValueChange={setMileageRange}
          max={200000}
          min={0}
          step={5000}
          className="mb-2"
        />
        <div className="flex justify-between text-[10px] text-muted-foreground">
          <span>{mileageRange[0].toLocaleString("pt-BR")} km</span>
          <span>{mileageRange[1].toLocaleString("pt-BR")} km</span>
        </div>
      </div>

      {/* Transmission */}
      <div className="p-3 border-b border-border">
        <h4 className="text-xs font-medium text-foreground mb-2">Câmbio</h4>
        <Select>
          <SelectTrigger className="bg-muted border-border text-xs h-8">
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
      <div className="p-3 border-b border-border">
        <h4 className="text-xs font-medium text-foreground mb-2">Combustível</h4>
        <Select>
          <SelectTrigger className="bg-muted border-border text-xs h-8">
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
      <div className="p-3">
        <Button variant="hero" className="w-full text-xs h-9">
          Buscar Veículos
        </Button>
      </div>
    </div>
  );
};

export default SearchFilters;
