import { useState, useMemo } from "react";
import { toast } from "@/hooks/use-toast";
import { Header } from "@/components/Header";
import { SearchFilter } from "@/components/SearchFilter";
import { ProductCard } from "@/components/ProductCard";
import { Cart } from "@/components/Cart";
import { CheckoutForm } from "@/components/CheckoutForm";
import { products, Product, ProductVariant } from "@/data/products";
import { CartItem, CustomerInfo, OrderData } from "@/types";
import { generateOrderPDF, downloadPDF } from "@/utils/pdfGenerator";
import { sendOrderEmail, getEmailJSSetupInstructions } from "@/utils/emailService";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = searchTerm === "" || 
        product.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.nameTe.includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.categoryTe.includes(searchTerm);
      
      const matchesCategory = selectedCategory === "" || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const addToCart = (product: Product, quantity: number, variant: ProductVariant) => {
    setCartItems(prev => {
      const itemKey = `${product.id}-${variant.size}`;
      const existingItem = prev.find(item => item.id === itemKey);
      
      if (existingItem) {
        return prev.map(item =>
          item.id === itemKey
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, {
          id: itemKey,
          nameEn: product.nameEn,
          nameTe: product.nameTe,
          price: variant.price,
          unit: variant.unit,
          unitTe: variant.unitTe,
          quantity,
          variant: variant.size,
          variantTe: variant.sizeTe
        }];
      }
    });
    
    toast({
      title: "Added to cart / కార్ట్‌కు జోడించబడింది",
      description: `${product.nameEn} - ${variant.size} (${quantity} ${variant.unit})`,
    });
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Removed from cart / కార్ట్ నుండి తొలగించబడింది",
    });
  };

  const clearCart = () => {
    setCartItems([]);
    toast({
      title: "Cart cleared / కార్ట్ క్లియర్ చేయబడింది",
    });
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSubmit = async (customerInfo: CustomerInfo) => {
    try {
      const orderData: OrderData = {
        items: cartItems,
        customer: customerInfo,
        total: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        orderDate: new Date(),
        orderId: `ORD-${Date.now()}`
      };

      // Generate PDF
      const pdfBlob = generateOrderPDF(orderData);
      const filename = `order-${orderData.orderId}.pdf`;
      
      // Download PDF for customer
      downloadPDF(pdfBlob, filename);

      // Try to send email (will show setup instructions if not configured)
      try {
        const emailSent = await sendOrderEmail(orderData, pdfBlob);
        if (!emailSent) {
          console.log("Email setup instructions:", getEmailJSSetupInstructions());
          toast({
            title: "Order placed successfully! / ఆర్డర్ విజయవంతంగా ఇవ్వబడింది!",
            description: "PDF downloaded. Email setup required for automatic notifications.",
          });
        } else {
          toast({
            title: "Order placed and email sent! / ఆర్డర్ ఇవ్వబడింది మరియు ఇమెయిల్ పంపబడింది!",
            description: "Shop owner has been notified.",
          });
        }
      } catch (emailError) {
        console.log("Email configuration needed:", getEmailJSSetupInstructions());
        toast({
          title: "Order placed successfully! / ఆర్డర్ విజయవంతంగా ఇవ్వబడింది!",
          description: "PDF downloaded. Please configure EmailJS for notifications.",
        });
      }

      // Clear cart and close checkout
      setCartItems([]);
      setIsCheckoutOpen(false);
      
    } catch (error) {
      console.error('Order submission failed:', error);
      toast({
        title: "Order failed / ఆర్డర్ విఫలమైంది",
        description: "Please try again",
        variant: "destructive"
      });
    }
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header cartItemsCount={cartItemsCount} onCartClick={() => setIsCartOpen(true)} />
      
      <main className="container mx-auto px-4 py-6">
        <div className="text-center mb-8 animate-slide-in">
          <h2 className="text-4xl font-bold bg-gradient-fresh bg-clip-text text-transparent mb-4">
            SV Provisions - Fresh Groceries Delivered
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            ఎస్వీ ప్రొవిజన్స్ - తాజా కిరాణా సామాను ఇంటికి చేరుస్తాం
          </p>
          <p className="text-sm text-muted-foreground">
            Premium quality products at affordable prices / సరసమైన ధరలకు ప్రీమియం నాణ్యత ఉత్పాదనలు
          </p>
        </div>

        <SearchFilter
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          onSearchChange={setSearchTerm}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No products found / ఉత్పాదనలు దొరకలేదు
            </p>
          </div>
        )}
      </main>

      <Cart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
        onCheckout={handleCheckout}
      />

      <CheckoutForm
        items={cartItems}
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onSubmitOrder={handleOrderSubmit}
      />
    </div>
  );
};

export default Index;
