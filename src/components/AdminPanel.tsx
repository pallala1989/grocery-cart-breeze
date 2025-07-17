
import { useState } from "react";
import { Plus, Edit, Trash2, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Product, ProductVariant } from "@/types";

interface AdminPanelProps {
  products: Product[];
  onUpdateProducts: (products: Product[]) => void;
}

export function AdminPanel({ products, onUpdateProducts }: AdminPanelProps) {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddProduct = () => {
    const newProduct: Product = {
      id: Date.now().toString(),
      nameEn: "",
      nameTe: "",
      category: "",
      categoryTe: "",
      image: "",
      inStock: true,
      variants: [{
        id: "1",
        size: "1kg",
        sizeTe: "1 కేజీ",
        unit: "kg",
        unitTe: "కేజీ",
        price: 0
      }]
    };
    setEditingProduct(newProduct);
    setIsDialogOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct({ ...product });
    setIsDialogOpen(true);
  };

  const handleDeleteProduct = (productId: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      onUpdateProducts(products.filter(p => p.id !== productId));
    }
  };

  const handleSaveProduct = () => {
    if (!editingProduct) return;

    const existingIndex = products.findIndex(p => p.id === editingProduct.id);
    if (existingIndex >= 0) {
      const updatedProducts = [...products];
      updatedProducts[existingIndex] = editingProduct;
      onUpdateProducts(updatedProducts);
    } else {
      onUpdateProducts([...products, editingProduct]);
    }
    
    setIsDialogOpen(false);
    setEditingProduct(null);
  };

  const addVariant = () => {
    if (!editingProduct) return;
    const newVariant: ProductVariant = {
      id: Date.now().toString(),
      size: "1kg",
      sizeTe: "1 కేజీ",
      unit: "kg",
      unitTe: "కేజీ",
      price: 0
    };
    setEditingProduct({
      ...editingProduct,
      variants: [...editingProduct.variants, newVariant]
    });
  };

  const updateVariant = (variantIndex: number, field: keyof ProductVariant, value: string | number) => {
    if (!editingProduct) return;
    const updatedVariants = [...editingProduct.variants];
    if (field === 'price') {
      updatedVariants[variantIndex] = { ...updatedVariants[variantIndex], [field]: Number(value) };
    } else {
      updatedVariants[variantIndex] = { ...updatedVariants[variantIndex], [field]: String(value) };
    }
    setEditingProduct({ ...editingProduct, variants: updatedVariants });
  };

  const removeVariant = (variantIndex: number) => {
    if (!editingProduct || editingProduct.variants.length <= 1) return;
    const updatedVariants = editingProduct.variants.filter((_, i) => i !== variantIndex);
    setEditingProduct({ ...editingProduct, variants: updatedVariants });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Product Management</h2>
        <Button onClick={handleAddProduct} className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{product.nameEn}</CardTitle>
              <p className="text-sm text-muted-foreground">{product.nameTe}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm">Category: {product.category}</p>
                <p className="text-xs text-muted-foreground">Variants: {product.variants.length}</p>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleEditProduct(product)}
                  >
                    <Edit className="h-3 w-3 mr-1" />
                    Edit
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <Trash2 className="h-3 w-3 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingProduct?.nameEn ? 'Edit Product' : 'Add New Product'}
            </DialogTitle>
          </DialogHeader>
          
          {editingProduct && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nameEn">Product Name (English)</Label>
                  <Input
                    id="nameEn"
                    value={editingProduct.nameEn}
                    onChange={(e) => setEditingProduct({ ...editingProduct, nameEn: e.target.value })}
                    placeholder="Enter English name"
                  />
                </div>
                <div>
                  <Label htmlFor="nameTe">Product Name (Telugu)</Label>
                  <Input
                    id="nameTe"
                    value={editingProduct.nameTe}
                    onChange={(e) => setEditingProduct({ ...editingProduct, nameTe: e.target.value })}
                    placeholder="Enter Telugu name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category (English)</Label>
                  <Input
                    id="category"
                    value={editingProduct.category}
                    onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                    placeholder="Enter category"
                  />
                </div>
                <div>
                  <Label htmlFor="categoryTe">Category (Telugu)</Label>
                  <Input
                    id="categoryTe"
                    value={editingProduct.categoryTe}
                    onChange={(e) => setEditingProduct({ ...editingProduct, categoryTe: e.target.value })}
                    placeholder="Enter Telugu category"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  value={editingProduct.image}
                  onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                  placeholder="Enter image URL"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Product Variants</Label>
                  <Button variant="outline" size="sm" onClick={addVariant}>
                    <Plus className="h-3 w-3 mr-1" />
                    Add Variant
                  </Button>
                </div>
                
                {editingProduct.variants.map((variant, index) => (
                  <Card key={variant.id} className="p-3">
                    <div className="grid grid-cols-5 gap-2 items-end">
                      <div>
                        <Label className="text-xs">Size</Label>
                        <Input
                          value={variant.size}
                          onChange={(e) => updateVariant(index, 'size', e.target.value)}
                          placeholder="1kg"
                          size="sm"
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Unit</Label>
                        <Input
                          value={variant.unit}
                          onChange={(e) => updateVariant(index, 'unit', e.target.value)}
                          placeholder="kg"
                          size="sm"
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Unit (Telugu)</Label>
                        <Input
                          value={variant.unitTe}
                          onChange={(e) => updateVariant(index, 'unitTe', e.target.value)}
                          placeholder="కేజీ"
                          size="sm"
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Price (₹)</Label>
                        <Input
                          type="number"
                          value={variant.price}
                          onChange={(e) => updateVariant(index, 'price', parseFloat(e.target.value) || 0)}
                          placeholder="0"
                          size="sm"
                        />
                      </div>
                      <div>
                        {editingProduct.variants.length > 1 && (
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => removeVariant(index)}
                            className="h-8 w-8 p-0"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="flex space-x-2 pt-4">
                <Button onClick={handleSaveProduct} className="bg-primary hover:bg-primary/90">
                  <Save className="h-4 w-4 mr-2" />
                  Save Product
                </Button>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
