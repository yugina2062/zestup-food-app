import CustomerLayout from "@/components/layout/CustomerLayout";
import { useCart } from "@/context/CartContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreditCard, Truck, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CheckoutPage = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [payment, setPayment] = useState("cod");

  const paymentMethods = [
    { id: "cod", label: "Cash on Delivery", icon: Wallet },
    { id: "card", label: "Credit/Debit Card", icon: CreditCard },
    { id: "upi", label: "UPI Payment", icon: Truck },
  ];

  return (
    <CustomerLayout>
      <div className="px-4 mt-4 mb-6">
        <h1 className="text-lg font-bold mb-4">Checkout</h1>

        <section className="mb-5">
          <h3 className="text-sm font-semibold mb-3">Delivery Address</h3>
          <div className="space-y-3">
            <Input placeholder="Full Name" className="rounded-xl" />
            <Input placeholder="Phone Number" className="rounded-xl" />
            <Input placeholder="Address Line 1" className="rounded-xl" />
            <Input placeholder="Address Line 2" className="rounded-xl" />
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="City" className="rounded-xl" />
              <Input placeholder="PIN Code" className="rounded-xl" />
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h3 className="text-sm font-semibold mb-3">Payment Method</h3>
          <div className="space-y-2">
            {paymentMethods.map((m) => (
              <button
                key={m.id}
                onClick={() => setPayment(m.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-colors ${
                  payment === m.id ? "border-primary bg-primary/5" : "border-border"
                }`}
              >
                <m.icon size={20} className={payment === m.id ? "text-primary" : "text-muted-foreground"} />
                <span className="text-sm font-medium">{m.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="bg-card rounded-xl p-4 border border-border/50 mb-4">
          <h3 className="text-sm font-semibold mb-3">Order Summary</h3>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">{item.name} × {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="border-t border-border mt-2 pt-2 flex justify-between font-bold">
            <span>Total</span><span>₹{cartTotal}</span>
          </div>
        </section>

        <Link to="/order-success" onClick={() => clearCart()}>
          <Button className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-semibold hover:opacity-90">
            Confirm Order
          </Button>
        </Link>
      </div>
    </CustomerLayout>
  );
};

export default CheckoutPage;
