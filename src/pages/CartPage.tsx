import CustomerLayout from "@/components/layout/CustomerLayout";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const [coupon, setCoupon] = useState("");

  if (cart.length === 0) {
    return (
      <CustomerLayout>
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
          <span className="text-5xl mb-4">🛒</span>
          <h2 className="text-lg font-bold mb-1">Your cart is empty</h2>
          <p className="text-sm text-muted-foreground mb-4">Explore our delicious pickles!</p>
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
        <h1 className="text-lg font-bold mb-4">My Cart ({cart.length})</h1>
        <div className="space-y-3">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-3 bg-card rounded-xl p-3 border border-border/50 shadow-soft">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold line-clamp-1">{item.name}</h3>
                  <p className="text-base font-bold mt-0.5">₹{item.price}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-muted rounded-lg">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1.5"><Minus size={14} /></button>
                    <span className="text-sm font-semibold w-5 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1.5"><Plus size={14} /></button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="p-1.5 text-destructive hover:bg-destructive/10 rounded-lg">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <Input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Coupon code" className="rounded-xl" />
          <Button variant="outline" className="rounded-xl shrink-0">Apply</Button>
        </div>

        <div className="mt-4 bg-card rounded-xl p-4 border border-border/50 space-y-2">
          <div className="flex justify-between text-sm"><span className="text-muted-foreground">Subtotal</span><span>₹{cartTotal}</span></div>
          <div className="flex justify-between text-sm"><span className="text-muted-foreground">Delivery</span><span className="text-primary font-medium">FREE</span></div>
          <div className="border-t border-border pt-2 flex justify-between font-bold"><span>Total</span><span>₹{cartTotal}</span></div>
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
