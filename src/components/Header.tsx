import { ShoppingCart, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemsCount, onCartClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-2">
          <Store className="h-6 w-6 text-primary" />
          <div>
            <h1 className="text-xl font-bold text-foreground">Fresh Market</h1>
            <p className="text-sm text-muted-foreground">ఫ్రెష్ మార్కెట్</p>
          </div>
        </div>
        
        <div className="flex-1" />
        
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onCartClick}
          className="relative"
        >
          <ShoppingCart className="h-4 w-4" />
          <span className="hidden sm:inline ml-2">Cart / కార్ట్</span>
          {cartItemsCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
            >
              {cartItemsCount}
            </Badge>
          )}
        </Button>
      </div>
    </header>
  );
}