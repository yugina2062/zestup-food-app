import { useParams, Link } from "react-router-dom";
import CustomerLayout from "@/components/layout/CustomerLayout";
import { products } from "@/data/mockData";
import { useCart } from "@/context/CartContext";
import { Star, ShoppingCart, Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const reviews = [
  { name: "Priya S.", rating: 5, text: "Absolutely delicious! Tastes like homemade.", date: "Mar 15, 2026" },
  { name: "Rahul K.", rating: 4, text: "Great flavor and packaging. Will order again.", date: "Mar 10, 2026" },
  { name: "Anita M.", rating: 5, text: "Best pickle I've ever had online!", date: "Feb 28, 2026" },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  if (!product) return <CustomerLayout><div className="p-6 text-center text-muted-foreground">Product not found</div></CustomerLayout>;

  const wishlisted = isInWishlist(product.id);

  return (
    <CustomerLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="relative">
          <img src={product.image} alt={product.name} width={512} height={512} className="w-full aspect-square object-cover sm:max-h-96 sm:object-contain sm:bg-muted" />
          <Link to="/products" className="absolute top-4 left-4 p-2 bg-card/80 backdrop-blur rounded-full shadow-soft">
            <ArrowLeft size={20} />
          </Link>
          <button onClick={() => toggleWishlist(product)} className="absolute top-4 right-4 p-2 bg-card/80 backdrop-blur rounded-full shadow-soft">
            <Heart size={20} className={wishlisted ? "text-destructive fill-destructive" : "text-muted-foreground"} />
          </button>
        </div>

        <div className="p-4 -mt-4 bg-background rounded-t-3xl relative z-10">
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-xl font-bold flex-1">{product.name}</h1>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1 bg-primary/10 px-2 py-0.5 rounded-full">
              <Star size={12} className="text-secondary fill-secondary" />
              <span className="text-xs font-semibold">{product.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">{product.reviews} reviews</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold">₹{product.price}</span>
            {product.originalPrice && <span className="text-base text-muted-foreground line-through">₹{product.originalPrice}</span>}
          </div>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

          <div className="flex gap-3">
            <Button onClick={() => addToCart(product)} className="flex-1 bg-primary text-primary-foreground rounded-xl h-12 font-semibold gap-2 hover:opacity-90">
              <ShoppingCart size={18} /> Add to Cart
            </Button>
          </div>

          {/* Reviews */}
          <div className="mt-8">
            <h3 className="font-bold text-base mb-4">Customer Reviews</h3>
            <div className="space-y-3">
              {reviews.map((r, i) => (
                <div key={i} className="bg-card rounded-xl p-3 border border-border/50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold">{r.name}</span>
                    <span className="text-[10px] text-muted-foreground">{r.date}</span>
                  </div>
                  <div className="flex gap-0.5 mb-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={12} className={j < r.rating ? "text-secondary fill-secondary" : "text-muted"} />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </CustomerLayout>
  );
};

export default ProductDetailPage;
