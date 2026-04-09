import CustomerLayout from "@/components/layout/CustomerLayout";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const discount = couponApplied ? Math.round(cartTotal * 0.2) : 0;
  const finalTotal = cartTotal - discount;

  if (cart.length === 0) {
    return (
      <CustomerLayout>
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
            <ShoppingCart size={32} className="text-muted-foreground" />
          </div>
          <h2 className="text-lg font-bold mb-1">Your cart is empty</h2>
          <p className="text-sm text-muted-foreground mb-4">Explore our delicious Nepali pickles!</p>
          <Link to="/products">
            <Button className="bg-primary text-primary-foreground rounded-xl">Browse Products</Button>
          </Link>
        </div>
      </CustomerLayout>
    );
  }

  return (
    <CustomerLayout>
      <div className="px-4 mt-4">
        <h1 className="text-lg font-bold mb-4">My Cart ({cart.length} items)</h1>
        <div className="space-y-3">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-3 bg-card rounded-2xl p-3 border border-border/50 shadow-soft">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold line-clamp-1">{item.name}</h3>
                  <p className="text-base font-bold text-primary mt-0.5">Rs.{item.price}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 bg-muted rounded-xl">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:text-primary transition-colors"><Minus size={14} /></button>
                    <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:text-primary transition-colors"><Plus size={14} /></button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="p-2 text-destructive hover:bg-destructive/10 rounded-xl transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <Input
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Enter coupon code"
            className="rounded-xl h-11"
          />
          <Button
            variant="outline"
            onClick={() => { if (coupon.toUpperCase() === "ZEST20") setCouponApplied(true); }}
            className="rounded-xl shrink-0 h-11"
          >
            Apply
          </Button>
        </div>
        {couponApplied && (
          <p className="text-xs text-secondary font-medium mt-2">✓ Coupon ZEST20 applied! 20% off</p>
        )}

        <div className="mt-4 bg-card rounded-2xl p-4 border border-border/50 space-y-2.5">
          <div className="flex justify-between text-sm"><span className="text-muted-foreground">Subtotal</span><span>Rs.{cartTotal}</span></div>
          {couponApplied && (
            <div className="flex justify-between text-sm"><span className="text-secondary">Discount (20%)</span><span className="text-secondary">-Rs.{discount}</span></div>
          )}
          <div className="flex justify-between text-sm"><span className="text-muted-foreground">Delivery</span><span className="text-secondary font-medium">FREE</span></div>
          <div className="border-t border-border pt-2.5 flex justify-between font-bold text-base"><span>Total</span><span className="text-primary">Rs.{finalTotal}</span></div>
        </div>

        <Link to="/checkout" className="block mt-4 mb-6">
          <Button className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-semibold hover:opacity-90">
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </CustomerLayout>
  );
};

export default CartPage;
