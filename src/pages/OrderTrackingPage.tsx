import { useParams, Link } from "react-router-dom";
import CustomerLayout from "@/components/layout/CustomerLayout";
import { sampleOrders } from "@/data/mockData";
import { Check, Clock, Package, Truck, ArrowLeft } from "lucide-react";

const steps = [
  { key: "pending", label: "Order Placed", icon: Clock, desc: "We've received your order" },
  { key: "processing", label: "Processing", icon: Package, desc: "Your order is being prepared" },
  { key: "shipped", label: "Out for Delivery", icon: Truck, desc: "On the way to you" },
  { key: "delivered", label: "Delivered", icon: Check, desc: "Enjoy your ZestyJars!" },
];

const statusIndex: Record<string, number> = { pending: 0, processing: 1, shipped: 2, delivered: 3 };

const OrderTrackingPage = () => {
  const { id } = useParams();
  const order = sampleOrders.find((o) => o.id === id) || sampleOrders[0];
  const currentStep = statusIndex[order.status];

  return (
    <CustomerLayout>
      <div className="px-4 mt-4 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/orders" className="p-2 rounded-xl hover:bg-muted transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-lg font-bold">Track Order</h1>
            <p className="text-xs text-muted-foreground">{order.id} • {order.date}</p>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-card rounded-2xl border border-border/50 p-5 mb-6 shadow-soft">
          <div className="relative pl-10 space-y-6">
            <div className="absolute left-[17px] top-3 bottom-3 w-0.5 bg-border" />
            {steps.map((step, i) => {
              const done = i <= currentStep;
              const isCurrent = i === currentStep;
              return (
                <div key={step.key} className="relative flex items-start gap-3">
                  <div className={`absolute -left-10 w-9 h-9 rounded-xl flex items-center justify-center z-10 transition-all ${
                    done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  } ${isCurrent ? "ring-4 ring-primary/20" : ""}`}>
                    <step.icon size={16} />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${done ? "text-foreground" : "text-muted-foreground"}`}>{step.label}</p>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-card rounded-2xl p-4 border border-border/50 shadow-soft">
          <h3 className="text-sm font-semibold mb-3">Order Items</h3>
          {order.items.map((item) => (
            <div key={item.id} className="flex items-center gap-3 mb-3 last:mb-0">
              <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover" />
              <div className="flex-1">
                <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
              </div>
              <span className="text-sm font-bold">Rs.{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="border-t border-border mt-3 pt-3 flex justify-between font-bold text-sm">
            <span>Total</span>
            <span className="text-primary">Rs.{order.total}</span>
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default OrderTrackingPage;
