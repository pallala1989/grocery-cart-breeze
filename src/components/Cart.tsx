import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CartItem } from "@/types";

interface CartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onCheckout: () => void;
}

export function Cart({ 
  items, 
  isOpen, 
  onClose, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart, 
  onCheckout 
}: CartProps) {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + (item.price * item.orderQuantity), 0);
  const totalItems = items.reduce((sum, item) => sum + item.orderQuantity, 0);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md max-h-[90vh] flex flex-col">
        <CardHeader className="flex-shrink-0">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5" />
              <span>Cart / కార్ట్</span>
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              Your cart is empty / మీ కార్ట్ ఖాళీగా ఉంది
            </p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.nameEn}</h4>
                    <p className="text-xs text-muted-foreground">{item.nameTe}</p>
                    <p className="text-xs text-muted-foreground">
                      Size: {item.quantity} {item.unit} / {item.quantityTe} {item.unitTe}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      ₹{item.price} per pack
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, item.orderQuantity - 1))}
                      className="h-6 w-6 p-0"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm font-medium">
                      {item.orderQuantity}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onUpdateQuantity(item.id, item.orderQuantity + 1)}
                      className="h-6 w-6 p-0"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => onRemoveItem(item.id)}
                    className="text-destructive h-6 w-6 p-0"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
        
        {items.length > 0 && (
          <div className="flex-shrink-0 p-6 space-y-4">
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Total Items / మొత్తం వస్తువులు:</span>
                <span className="font-medium">{totalItems}</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total / మొత్తం:</span>
                <span className="text-primary">₹{total}</span>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onClearCart}
                className="flex-1"
              >
                Clear / క్లియర్
              </Button>
              <Button 
                onClick={onCheckout}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Checkout / చెకౌట్
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}