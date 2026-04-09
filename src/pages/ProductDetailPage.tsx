import { useParams, Link } from "react-router-dom";
import CustomerLayout from "@/components/layout/CustomerLayout";
import { products } from "@/data/mockData";
import { useCart } from "@/context/CartContext";
import { Star, ShoppingCart, Heart, ArrowLeft, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const reviews = [
  { name: "Sita S.", rating: 5, text: "Absolutely delicious! Tastes like homemade.", date: "Mar 15, 2026", image: null },
  { name: "Ram K.", rating: 4, text: "Great flavor and packaging. Will order again.", date: "Mar 10, 2026", image: null },
  { name: "Anita G.", rating: 5, text: "Best pickle I've ever had online! The taste is authentic Nepali.", date: "Feb 28, 2026", image: null },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  if (!product) return <CustomerLayout><div className="p-6 text-center text-muted-foreground">Product not found</div></CustomerLayout>;

  const wishlisted = isInWishlist(product.id);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <CustomerLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="relative">
          <img src={product.image} alt={product.name} width={512} height={512} className="w-full aspect-square object-cover sm:max-h-96 sm:object-contain sm:bg-muted" />
          <Link to="/products" className="absolute top-4 left-4 p-2 bg-card/80 backdrop-blur rounded-xl shadow-soft">
            <ArrowLeft size={20} />
          </Link>
          <button onClick={() => toggleWishlist(product)} className="absolute top-4 right-4 p-2 bg-card/80 backdrop-blur rounded-xl shadow-soft">
            <Heart size={20} className={wishlisted ? "text-destructive fill-destructive" : "text-muted-foreground"} />
          </button>
          {product.originalPrice && (
            <span className="absolute bottom-4 left-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
              {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>

        <div className="p-4 -mt-4 bg-background rounded-t-3xl relative z-10">
          <h1 className="text-xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1 bg-accent/10 px-2.5 py-1 rounded-full">
              <Star size={12} className="text-accent fill-accent" />
              <span className="text-xs font-semibold">{product.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">{product.reviews} reviews</span>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${product.inStock ? "bg-olive-light text-secondary" : "bg-destructive/10 text-destructive"}`}>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-primary">Rs.{product.price}</span>
            {product.originalPrice && <span className="text-base text-muted-foreground line-through">Rs.{product.originalPrice}</span>}
          </div>

          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

          <div className="flex gap-3 mb-8">
            <Button onClick={() => addToCart(product)} className="flex-1 bg-primary text-primary-foreground rounded-xl h-12 font-semibold gap-2 hover:opacity-90">
              <ShoppingCart size={18} /> Add to Cart
            </Button>
            <Button onClick={() => toggleWishlist(product)} variant="outline" className="rounded-xl h-12 px-4">
              <Heart size={18} className={wishlisted ? "text-destructive fill-destructive" : ""} />
            </Button>
          </div>

          {/* Reviews */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-base">Customer Reviews ({reviews.length})</h3>
              <Link to="/feedback" className="text-xs text-primary font-medium hover:underline">Write Review</Link>
            </div>
            <div className="space-y-3">
              {reviews.map((r, i) => (
                <div key={i} className="bg-card rounded-xl p-4 border border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                        {r.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <span className="text-sm font-semibold">{r.name}</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">{r.date}</span>
                  </div>
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={12} className={j < r.rating ? "text-accent fill-accent" : "text-muted"} />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <div className="mt-8">
              <h3 className="font-bold text-base mb-4">You Might Also Like</h3>
              <div className="grid grid-cols-2 gap-3">
                {related.map((p) => (
                  <Link key={p.id} to={`/product/${p.id}`} className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-soft">
                    <img src={p.image} alt={p.name} className="w-full aspect-square object-cover" />
                    <div className="p-2.5">
                      <p className="text-xs font-semibold line-clamp-1">{p.name}</p>
                      <p className="text-sm font-bold text-primary mt-0.5">Rs.{p.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </CustomerLayout>
  );
};

export default ProductDetailPage;
