import { useState } from "react";
import { User, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CartItem, CustomerInfo } from "@/types";

interface CheckoutFormProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onSubmitOrder: (customerInfo: CustomerInfo) => void;
}

export function CheckoutForm({ items, isOpen, onClose, onSubmitOrder }: CheckoutFormProps) {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    mobile: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerInfo.name.trim() || !customerInfo.mobile.trim()) {
      return;
    }
    
    setIsSubmitting(true);
    try {
      await onSubmitOrder(customerInfo);
      setCustomerInfo({ name: '', mobile: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Order Details / ఆర్డర్ వివరాలు</CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Order Summary */}
          <div className="space-y-2">
            <h3 className="font-medium">Order Summary / ఆర్డర్ సారాంశం</h3>
            <div className="bg-muted p-3 rounded-lg space-y-2">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.nameEn} x {item.quantity}</span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
              <div className="border-t pt-2 flex justify-between font-bold">
                <span>Total / మొత్తం:</span>
                <span>₹{total}</span>
              </div>
            </div>
          </div>

          {/* Customer Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Name / పేరు</span>
              </Label>
              <Input
                id="name"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your name / మీ పేరు నమోదు చేయండి"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mobile" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Mobile Number / మొబైల్ నంబర్</span>
              </Label>
              <Input
                id="mobile"
                type="tel"
                value={customerInfo.mobile}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, mobile: e.target.value }))}
                placeholder="Enter mobile number / మొబైల్ నంబర్ నమోదు చేయండి"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90"
              disabled={isSubmitting || !customerInfo.name.trim() || !customerInfo.mobile.trim()}
            >
              {isSubmitting ? 'Placing Order...' : 'Place Order / ఆర్డర్ చేయండి'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}