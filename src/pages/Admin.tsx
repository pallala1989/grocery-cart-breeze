import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdminPanel } from "@/components/AdminPanel";
import { Product } from "@/types";
import { products as initialProducts } from "@/data/products";

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  useEffect(() => {
    // Load products from localStorage if available
    const savedProducts = localStorage.getItem('sv-provisions-products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  const handleUpdateProducts = (updatedProducts: Product[]) => {
    setProducts(updatedProducts);
    // Save to localStorage
    localStorage.setItem('sv-provisions-products', JSON.stringify(updatedProducts));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemCount={0} onCartClick={() => {}} />
      <main className="container mx-auto px-4 py-8">
        <AdminPanel 
          products={products}
          onUpdateProducts={handleUpdateProducts}
        />
      </main>
      <Footer />
    </div>
  );
}