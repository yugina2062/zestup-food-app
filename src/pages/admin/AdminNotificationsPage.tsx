import AdminLayout from "@/components/layout/AdminLayout";
import { AlertTriangle, Package, ShoppingBag, TrendingUp } from "lucide-react";

const notifications = [
  { id: 1, icon: AlertTriangle, title: "Low Stock Alert", desc: "Green Chili Pickle has only 3 units left in stock.", time: "10 min ago", type: "warning" as const },
  { id: 2, icon: ShoppingBag, title: "New Order Received", desc: "Order ZU-10048 placed by Ram Sharma — Rs 498.", time: "25 min ago", type: "info" as const },
  { id: 3, icon: ShoppingBag, title: "New Order Received", desc: "Order ZU-10047 placed by Priya Thapa — Rs 777.", time: "1 hour ago", type: "info" as const },
  { id: 4, icon: AlertTriangle, title: "Low Stock Alert", desc: "Lemon Pickle has only 5 units left. Consider restocking.", time: "2 hours ago", type: "warning" as const },
  { id: 5, icon: Package, title: "Order Delivered", desc: "Order ZU-10042 has been marked as delivered.", time: "3 hours ago", type: "success" as const },
  { id: 6, icon: TrendingUp, title: "Sales Milestone", desc: "You've crossed 300+ orders this month! 🎉", time: "5 hours ago", type: "success" as const },
  { id: 7, icon: ShoppingBag, title: "New Order Received", desc: "Order ZU-10046 placed by Anita KC — Rs 259.", time: "6 hours ago", type: "info" as const },
  { id: 8, icon: AlertTriangle, title: "Out of Stock", desc: "Red Chili Pickle is now out of stock.", time: "1 day ago", type: "danger" as const },
];

const typeStyles = {
  warning: "bg-accent/10 text-accent",
  info: "bg-primary/10 text-primary",
  success: "bg-secondary/10 text-secondary",
  danger: "bg-destructive/10 text-destructive",
};

const AdminNotificationsPage = () => (
  <AdminLayout>
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold mb-1">Admin Notifications</h1>
          <p className="text-sm text-muted-foreground">Stock alerts, new orders & updates</p>
        </div>
        <button className="text-xs text-primary font-medium hover:underline">Mark all read</button>
      </div>
    </div>

    <div className="space-y-2">
      {notifications.map((n) => (
        <div key={n.id} className="flex gap-3 p-4 bg-card border border-border rounded-2xl hover:shadow-sm transition-shadow">
          <div className={`w-10 h-10 rounded-xl ${typeStyles[n.type]} flex items-center justify-center shrink-0`}>
            <n.icon size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold">{n.title}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">{n.desc}</p>
            <p className="text-[10px] text-muted-foreground mt-1.5">{n.time}</p>
          </div>
        </div>
      ))}
    </div>
  </AdminLayout>
);

export default AdminNotificationsPage;
