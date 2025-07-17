
import { useState } from "react";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Product, ProductVariant } from "@/types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string, variantId: string, orderQuantity: number) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);

  const handleAddToCart = () => {
    onAddToCart(product.id, selectedVariant.id, quantity);
    setQuantity(1);
  };

  const handleVariantChange = (size: string) => {
    const variant = product.variants.find(v => v.size === size);
    if (variant) {
      setSelectedVariant(variant);
    }
  };

  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-hover hover:scale-[1.02] bg-gradient-card border-0 animate-slide-in group">
      {product.image && (
        <div className="relative overflow-hidden rounded-t-lg bg-gradient-subtle p-4">
          <img 
            src={product.image} 
            alt={product.nameEn}
            className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
              <Badge variant="destructive">Out of Stock / అమ్మకానికి లేదు</Badge>
            </div>
          )}
        </div>
      )}
      
      <CardContent className="flex-1 p-4">
        <div className="space-y-3">
          <Badge variant="secondary" className="text-xs bg-sv-primary/10 text-sv-primary border-sv-primary/20">
            {product.category} / {product.categoryTe}
          </Badge>
          
          <div>
            <h3 className="font-bold text-lg leading-tight text-card-foreground">
              {product.nameEn}
            </h3>
            <p className="text-muted-foreground text-sm font-medium">
              {product.nameTe}
            </p>
          </div>

          {product.description && (
            <p className="text-xs text-muted-foreground">
              {product.description}
            </p>
          )}

          {/* Variant Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Size / పరిమాణం:</label>
            <Select value={selectedVariant.size} onValueChange={handleVariantChange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {product.variants.map((variant) => (
                  <SelectItem key={variant.id} value={variant.size}>
                    {variant.size} ({variant.sizeTe})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-sv-primary">
              ₹{selectedVariant.price}
            </span>
            <span className="text-sm text-muted-foreground">
              per {selectedVariant.unit} / {selectedVariant.unitTe}
            </span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-between w-full space-x-3">
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="h-8 w-8 p-0 border-sv-primary/30 hover:border-sv-primary hover:bg-sv-primary/10"
              disabled={!product.inStock}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center font-bold text-sv-primary">{quantity}</span>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setQuantity(quantity + 1)}
              className="h-8 w-8 p-0 border-sv-primary/30 hover:border-sv-primary hover:bg-sv-primary/10"
              disabled={!product.inStock}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <Button 
            onClick={handleAddToCart}
            className="flex-1 bg-gradient-fresh hover:opacity-90 text-white font-medium shadow-glow disabled:opacity-50"
            size="sm"
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add / జోడించు
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
