import CustomerLayout from "@/components/layout/CustomerLayout";
import { Bell, Package, Tag, ShoppingCart, CheckCircle } from "lucide-react";

const notifications = [
  { id: 1, icon: Package, title: "Order Delivered", desc: "Your order ZU-10042 has been delivered successfully.", time: "2 hours ago", read: false, color: "bg-secondary/10 text-secondary" },
  { id: 2, icon: Tag, title: "Flash Sale Live!", desc: "Up to 30% off on all mango pickles. Limited time!", time: "5 hours ago", read: false, color: "bg-accent/10 text-accent" },
  { id: 3, icon: ShoppingCart, title: "Item Added to Cart", desc: "Red Chili Pickle has been added to your cart.", time: "1 day ago", read: true, color: "bg-primary/10 text-primary" },
  { id: 4, icon: CheckCircle, title: "Order Confirmed", desc: "Your order ZU-10038 has been confirmed and is being processed.", time: "2 days ago", read: true, color: "bg-secondary/10 text-secondary" },
  { id: 5, icon: Tag, title: "New Coupon Available", desc: "Use code ZEST20 to get 20% off on your next order!", time: "3 days ago", read: true, color: "bg-accent/10 text-accent" },
  { id: 6, icon: Package, title: "Order Shipped", desc: "Your order ZU-10035 is on its way. Track it now!", time: "5 days ago", read: true, color: "bg-primary/10 text-primary" },
];

const NotificationsPage = () => (
  <CustomerLayout>
    <div className="px-4 mt-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold">Notifications</h1>
        <button className="text-xs text-primary font-medium hover:underline">Mark all read</button>
      </div>

      <div className="space-y-2">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`flex gap-3 p-4 rounded-2xl border transition-colors ${
              n.read ? "bg-card border-border/50" : "bg-primary/5 border-primary/20"
            }`}
          >
            <div className={`w-10 h-10 rounded-xl ${n.color} flex items-center justify-center shrink-0`}>
              <n.icon size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className={`text-sm font-semibold ${!n.read ? "text-foreground" : ""}`}>{n.title}</h3>
                {!n.read && <span className="w-2 h-2 bg-primary rounded-full shrink-0 mt-1.5" />}
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{n.desc}</p>
              <p className="text-[10px] text-muted-foreground mt-1.5">{n.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </CustomerLayout>
);

export default NotificationsPage;
