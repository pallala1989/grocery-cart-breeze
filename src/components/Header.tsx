import { ShoppingCart, Store, Menu, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onNavigate?: (page: string) => void;
}

export function Header({ cartItemsCount, onCartClick, onNavigate }: HeaderProps) {
  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const NavItems = () => (
    <>
      <Button variant="ghost" onClick={() => handleNavigation('home')} className="text-foreground hover:text-sv-primary">
        Home / హోమ్
      </Button>
      <Button variant="ghost" onClick={() => handleNavigation('products')} className="text-foreground hover:text-sv-primary">
        Products / ఉత్పాదనలు
      </Button>
      <Button variant="ghost" onClick={() => handleNavigation('about')} className="text-foreground hover:text-sv-primary">
        About / గురించి
      </Button>
      <Button variant="ghost" onClick={() => handleNavigation('contact')} className="text-foreground hover:text-sv-primary">
        Contact / సంప్రదింపు
      </Button>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-card">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-fresh rounded-lg animate-pulse-glow">
            <Store className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-fresh bg-clip-text text-transparent">
              SV Provisions
            </h1>
            <p className="text-xs text-muted-foreground">
              ఎస్వీ ప్రొవిజన్స్ / Fresh & Quality
            </p>
          </div>
        </div>
        
        <div className="flex-1" />

        {/* Contact Info - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-4 mr-4">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>prsr4u@gmail.com</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 mr-4">
          <NavItems />
        </nav>

        {/* Cart Button */}
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onCartClick}
          className="relative mr-2 border-sv-primary/30 hover:border-sv-primary hover:bg-sv-primary/10"
        >
          <ShoppingCart className="h-4 w-4" />
          <span className="hidden sm:inline ml-2">Cart / కార్ట్</span>
          {cartItemsCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs bg-cart-orange border-0 animate-pulse"
            >
              {cartItemsCount}
            </Badge>
          )}
        </Button>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              <div className="text-center">
                <h2 className="text-lg font-bold bg-gradient-fresh bg-clip-text text-transparent">
                  SV Provisions
                </h2>
                <p className="text-sm text-muted-foreground">
                  ఎస్వీ ప్రొవిజన్స్
                </p>
              </div>
              
              <nav className="flex flex-col space-y-2">
                <NavItems />
              </nav>

              <div className="border-t pt-4 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>prsr4u@gmail.com</span>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}