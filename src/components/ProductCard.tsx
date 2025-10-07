import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    image_url: string;
    stock_quantity: number;
    is_available: boolean;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!product.is_available || product.stock_quantity === 0) {
      toast.error("This product is out of stock");
      return;
    }
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const getProductImage = (imageUrl: string) => {
    try {
      return new URL(`../assets/${imageUrl}`, import.meta.url).href;
    } catch {
      return imageUrl;
    }
  };

  return (
    <Card className="overflow-hidden group hover:shadow-hover transition-all duration-300 animate-fade-in bg-gradient-card">
      <div className="aspect-square overflow-hidden">
        <img
          src={getProductImage(product.image_url)}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          {product.stock_quantity === 0 || !product.is_available ? (
            <Badge variant="destructive">Sold Out</Badge>
          ) : product.stock_quantity < 5 ? (
            <Badge variant="secondary">Low Stock</Badge>
          ) : (
            <Badge className="bg-primary/20 text-primary">In Stock</Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
        <p className="text-2xl font-playfair font-bold text-primary">
          ₹{product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full"
          disabled={!product.is_available || product.stock_quantity === 0}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;