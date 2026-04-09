import { Star, ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/data/mockData";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const wishlisted = isInWishlist(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="bg-card rounded-2xl shadow-card overflow-hidden border border-border/50 flex flex-col"
    >
      <Link to={`/product/${product.id}`} className="relative">
        <img src={product.image} alt={product.name} loading="lazy" width={512} height={512} className="w-full aspect-square object-cover" />
        {product.originalPrice && (
          <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </span>
        )}
        <button
          onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}
          className="absolute top-2 right-2 p-1.5 bg-card/80 backdrop-blur-sm rounded-full shadow-soft"
        >
          <Heart size={16} className={wishlisted ? "text-destructive fill-destructive" : "text-muted-foreground"} />
        </button>
      </Link>
      <div className="p-3 flex flex-col flex-1">
        <Link to={`/product/${product.id}`} className="text-sm font-semibold line-clamp-2 mb-1 hover:text-primary transition-colors">
          {product.name}
        </Link>
        <div className="flex items-center gap-1 mb-2">
          <Star size={12} className="text-accent fill-accent" />
          <span className="text-xs font-medium">{product.rating}</span>
          <span className="text-[10px] text-muted-foreground">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-base font-bold">Rs.{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through ml-1">Rs.{product.originalPrice}</span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="p-2 bg-primary text-primary-foreground rounded-xl shadow-soft hover:opacity-90 transition-all active:scale-95"
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
