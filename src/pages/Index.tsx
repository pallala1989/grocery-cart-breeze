
import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { SearchFilter } from "@/components/SearchFilter";
import { Cart } from "@/components/Cart";
import { CheckoutForm } from "@/components/CheckoutForm";
import { products as initialProducts } from "@/data/products";
import { CartItem, CustomerInfo, OrderData, Product } from "@/types";
import { generateOrderPDF, downloadPDF } from "@/utils/pdfGenerator";
import { sendOrderEmail } from "@/utils/emailService";
import { useToast } from "@/hooks/use-toast";

export default function Index() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Load products from localStorage if available (for admin changes)
    const savedProducts = localStorage.getItem('sv-provisions-products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = searchTerm === "" || 
      product.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.nameTe.includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.categoryTe.includes(searchTerm);
    
    const matchesCategory = selectedCategory === "" || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const addToCart = (productId: string, variantId: string, orderQuantity: number = 1) => {
    const product = products.find(p => p.id === productId);
    const variant = product?.variants.find(v => v.id === variantId);
    
    if (!product || !variant) return;

    const cartItemId = `${productId}-${variantId}`;
    const existingItem = cartItems.find(item => item.id === cartItemId);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === cartItemId
          ? { ...item, orderQuantity: item.orderQuantity + orderQuantity }
          : item
      ));
    } else {
      const cartItem: CartItem = {
        id: cartItemId,
        productId: productId,
        variantId: variantId,
        nameEn: product.nameEn,
        nameTe: product.nameTe,
        price: variant.price,
        size: variant.size,
        sizeTe: variant.sizeTe,
        unit: variant.unit,
        unitTe: variant.unitTe,
        orderQuantity: orderQuantity
      };
      setCartItems([...cartItems, cartItem]);
    }

    toast({
      title: "Added to cart",
      description: `${product.nameEn} (${variant.size}) has been added to your cart`,
    });
  };

  const updateCartQuantity = (id: string, orderQuantity: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, orderQuantity } : item
    ));
  };

  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart",
    });
  };

  const clearCart = () => {
    setCartItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
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
        total: cartItems.reduce((sum, item) => sum + (item.price * item.orderQuantity), 0),
        orderDate: new Date(),
        orderId: `ORD-${Date.now()}`
      };

      // Generate PDF
      const pdfBlob = generateOrderPDF(orderData);
      const filename = `order-${orderData.orderId}.pdf`;
      
      // Download PDF for customer
      downloadPDF(pdfBlob, filename);

      // Try to send email
      try {
        const emailSent = await sendOrderEmail(orderData, pdfBlob);
        if (emailSent) {
          toast({
            title: "Order placed and email sent!",
            description: "PDF downloaded and shop owner notified.",
          });
        } else {
          toast({
            title: "Order placed successfully!",
            description: "PDF downloaded. Email setup required for notifications.",
          });
        }
      } catch (emailError) {
        toast({
          title: "Order placed successfully!",
          description: "PDF downloaded. Please configure EmailJS for notifications.",
        });
      }

      // Clear cart and close checkout
      setCartItems([]);
      setIsCheckoutOpen(false);
      
    } catch (error) {
      console.error('Order submission failed:', error);
      toast({
        title: "Order failed",
        description: "Please try again",
        variant: "destructive"
      });
    }
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.orderQuantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 animate-slide-in">
          <h2 className="text-4xl font-bold bg-gradient-fresh bg-clip-text text-transparent mb-4">
            SV Provisions - Fresh Groceries Delivered
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            Premium quality products at affordable prices / సరసమైన ధరలకు ప్రీమియం నాణ్యత ఉత్పాదనలు
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

      <Footer />

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
}
