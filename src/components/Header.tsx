
import { ShoppingCart, Store, Menu, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface HeaderProps {
  cartItemCount?: number;
  onCartClick?: () => void;
}

export function Header({ cartItemCount = 0, onCartClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handlePhoneClick = () => {
    window.open('tel:+919876543210', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:prsr4u@gmail.com', '_self');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-card">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
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
        </Link>
        
        <div className="flex-1" />

        {/* Contact Info - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-4 mr-4">
          <button 
            onClick={handlePhoneClick}
            className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <Phone className="h-4 w-4" />
            <span>+91 98765 43210</span>
          </button>
          <button 
            onClick={handleEmailClick}
            className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <Mail className="h-4 w-4" />
            <span>prsr4u@gmail.com</span>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 mr-4">
          <Link to="/" className="text-foreground hover:text-primary transition-colors px-3 py-2">
            Home / హోమ్
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors px-3 py-2">
            About / గురించి
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors px-3 py-2">
            Contact / సంప్రదింపు
          </Link>
          <Link to="/admin" className="text-foreground hover:text-primary transition-colors px-3 py-2">
            Admin
          </Link>
        </nav>

        {/* Cart Button */}
        {onCartClick && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onCartClick}
            className="relative mr-2 hover:bg-primary/10"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline ml-2">Cart / కార్ట్</span>
            {cartItemCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs animate-pulse"
              >
                {cartItemCount}
              </Badge>
            )}
          </Button>
        )}

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
              
              <nav className="flex flex-col space-y-4 p-4">
                <Link 
                  to="/" 
                  className={`text-foreground hover:text-primary transition-colors py-2 ${
                    location.pathname === '/' ? 'text-primary font-medium' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home / హోమ్
                </Link>
                <Link 
                  to="/about" 
                  className={`text-foreground hover:text-primary transition-colors py-2 ${
                    location.pathname === '/about' ? 'text-primary font-medium' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About / గురించి
                </Link>
                <Link 
                  to="/contact" 
                  className={`text-foreground hover:text-primary transition-colors py-2 ${
                    location.pathname === '/contact' ? 'text-primary font-medium' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact / సంప్రదింపు
                </Link>
                <Link 
                  to="/admin" 
                  className={`text-foreground hover:text-primary transition-colors py-2 ${
                    location.pathname === '/admin' ? 'text-primary font-medium' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admin
                </Link>
              </nav>

              <div className="border-t pt-4 space-y-2">
                <button 
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors w-full text-left"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </button>
                <button 
                  onClick={handleEmailClick}
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors w-full text-left"
                >
                  <Mail className="h-4 w-4" />
                  <span>prsr4u@gmail.com</span>
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
