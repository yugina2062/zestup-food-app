import CustomerLayout from "@/components/layout/CustomerLayout";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const { wishlist } = useCart();

  return (
    <CustomerLayout>
      <div className="px-4 mt-4 mb-6">
        <h1 className="text-lg font-bold mb-4">My Wishlist ({wishlist.length})</h1>
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center py-20 text-center">
            <span className="text-5xl mb-4">❤️</span>
            <h2 className="text-lg font-bold mb-1">Nothing saved yet</h2>
            <p className="text-sm text-muted-foreground mb-4">Save your favorite pickles here</p>
            <Link to="/products"><Button className="bg-primary text-primary-foreground rounded-xl">Explore Products</Button></Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {wishlist.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </CustomerLayout>
  );
};

export default WishlistPage;
