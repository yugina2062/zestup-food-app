import CustomerLayout from "@/components/layout/CustomerLayout";
import { useCart } from "@/context/CartContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreditCard, Truck, Wallet, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CheckoutPage = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [payment, setPayment] = useState("cod");

  const paymentMethods = [
    { id: "cod", label: "Cash on Delivery", icon: Wallet, desc: "Pay when you receive" },
    { id: "esewa", label: "eSewa / Khalti", icon: CreditCard, desc: "Digital wallet" },
    { id: "bank", label: "Bank Transfer", icon: Truck, desc: "Direct bank payment" },
  ];

  return (
    <CustomerLayout>
      <div className="px-4 mt-4 mb-6">
        <h1 className="text-lg font-bold mb-4">Checkout</h1>

        <section className="mb-6">
          <h3 className="text-sm font-semibold mb-3">Delivery Address</h3>
          <div className="bg-card rounded-2xl border border-border/50 p-4 space-y-3">
            <Input placeholder="Full Name" className="rounded-xl h-11" />
            <Input placeholder="Phone Number" className="rounded-xl h-11" />
            <Input placeholder="Street Address" className="rounded-xl h-11" />
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="City" className="rounded-xl h-11" />
              <Input placeholder="District" className="rounded-xl h-11" />
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-sm font-semibold mb-3">Payment Method</h3>
          <div className="space-y-2">
            {paymentMethods.map((m) => (
              <button
                key={m.id}
                onClick={() => setPayment(m.id)}
                className={`w-full flex items-center gap-3 p-4 rounded-2xl border transition-all ${
                  payment === m.id ? "border-primary bg-primary/5 shadow-soft" : "border-border hover:border-border/80"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${payment === m.id ? "bg-primary/10" : "bg-muted"}`}>
                  <m.icon size={18} className={payment === m.id ? "text-primary" : "text-muted-foreground"} />
                </div>
                <div className="text-left">
                  <span className="text-sm font-medium block">{m.label}</span>
                  <span className="text-[11px] text-muted-foreground">{m.desc}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="bg-card rounded-2xl p-4 border border-border/50 mb-4">
          <h3 className="text-sm font-semibold mb-3">Order Summary</h3>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between text-sm mb-2">
              <div className="flex items-center gap-2">
                <img src={item.image} alt={item.name} className="w-8 h-8 rounded-lg object-cover" />
                <span className="text-muted-foreground line-clamp-1">{item.name} × {item.quantity}</span>
              </div>
              <span className="font-medium">Rs.{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="border-t border-border mt-3 pt-3 flex justify-between font-bold">
            <span>Total</span><span className="text-primary">Rs.{cartTotal}</span>
          </div>
        </section>

        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <ShieldCheck size={14} className="text-secondary" />
          <span>Your payment information is secure and encrypted</span>
        </div>

        <Link to="/order-success" onClick={() => clearCart()}>
          <Button className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-semibold hover:opacity-90">
            Confirm & Place Order
          </Button>
        </Link>
      </div>
    </CustomerLayout>
  );
};

export default CheckoutPage;
