import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <Card className="h-full flex flex-col transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
      <CardContent className="flex-1 p-4">
        <div className="space-y-2">
          <Badge variant="secondary" className="text-xs">
            {product.category} / {product.categoryTe}
          </Badge>
          
          <div>
            <h3 className="font-semibold text-lg leading-tight">
              {product.nameEn}
            </h3>
            <p className="text-muted-foreground text-sm">
              {product.nameTe}
            </p>
          </div>
          
          <div className="flex items-baseline space-x-1">
            <span className="text-2xl font-bold text-primary">
              ₹{product.price}
            </span>
            <span className="text-sm text-muted-foreground">
              per {product.unit} / {product.unitTe}
            </span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-between w-full space-x-2">
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="h-8 w-8 p-0"
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center font-medium">{quantity}</span>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setQuantity(quantity + 1)}
              className="h-8 w-8 p-0"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <Button 
            onClick={handleAddToCart}
            className="flex-1 bg-primary hover:bg-primary/90"
            size="sm"
          >
            Add / జోడించు
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}