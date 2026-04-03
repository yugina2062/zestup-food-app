import { useParams } from "react-router-dom";
import CustomerLayout from "@/components/layout/CustomerLayout";
import { sampleOrders } from "@/data/mockData";
import { Check, Clock, Package, Truck } from "lucide-react";

const steps = [
  { key: "pending", label: "Order Placed", icon: Clock },
  { key: "processing", label: "Processing", icon: Package },
  { key: "shipped", label: "Shipped", icon: Truck },
  { key: "delivered", label: "Delivered", icon: Check },
];

const statusIndex: Record<string, number> = { pending: 0, processing: 1, shipped: 2, delivered: 3 };

const OrderTrackingPage = () => {
  const { id } = useParams();
  const order = sampleOrders.find((o) => o.id === id) || sampleOrders[0];
  const currentStep = statusIndex[order.status];

  return (
    <CustomerLayout>
      <div className="px-4 mt-4 mb-6">
        <h1 className="text-lg font-bold mb-1">Track Order</h1>
        <p className="text-sm text-muted-foreground mb-6">Order {order.id}</p>

        <div className="relative pl-8 space-y-8">
          <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-border" />
          {steps.map((step, i) => {
            const done = i <= currentStep;
            return (
              <div key={step.key} className="relative flex items-start gap-3">
                <div className={`absolute -left-8 w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                  done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  <step.icon size={16} />
                </div>
                <div>
                  <p className={`text-sm font-semibold ${done ? "text-foreground" : "text-muted-foreground"}`}>{step.label}</p>
                  <p className="text-xs text-muted-foreground">{done ? "Completed" : "Upcoming"}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-card rounded-xl p-4 border border-border/50">
          <h3 className="text-sm font-semibold mb-3">Order Items</h3>
          {order.items.map((item) => (
            <div key={item.id} className="flex items-center gap-3 mb-2">
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
              <div className="flex-1">
                <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
              </div>
              <span className="text-sm font-semibold">₹{item.price * item.quantity}</span>
            </div>
          ))}
        </div>
      </div>
    </CustomerLayout>
  );
};

export default OrderTrackingPage;
