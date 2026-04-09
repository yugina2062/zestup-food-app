import CustomerLayout from "@/components/layout/CustomerLayout";
import { sampleOrders } from "@/data/mockData";
import { Link } from "react-router-dom";
import { ChevronRight, Package } from "lucide-react";
import { useState } from "react";

const statusColors: Record<string, string> = {
  pending: "bg-accent/10 text-accent",
  processing: "bg-primary/10 text-primary",
  shipped: "bg-secondary/10 text-secondary",
  delivered: "bg-secondary text-secondary-foreground",
};

const OrdersPage = () => {
  const [tab, setTab] = useState<"active" | "past">("active");
  const activeOrders = sampleOrders.filter((o) => ["pending", "processing", "shipped"].includes(o.status));
  const pastOrders = sampleOrders.filter((o) => o.status === "delivered");
  const orders = tab === "active" ? activeOrders : pastOrders;

  return (
    <CustomerLayout>
      <div className="px-4 mt-4 mb-6">
        <h1 className="text-lg font-bold mb-4">My Orders</h1>

        <div className="flex bg-muted rounded-xl p-1 mb-4">
          <button
            onClick={() => setTab("active")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              tab === "active" ? "bg-card text-foreground shadow-soft" : "text-muted-foreground"
            }`}
          >
            Active ({activeOrders.length})
          </button>
          <button
            onClick={() => setTab("past")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              tab === "past" ? "bg-card text-foreground shadow-soft" : "text-muted-foreground"
            }`}
          >
            Past Purchases ({pastOrders.length})
          </button>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-16">
            <Package size={40} className="text-muted-foreground mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">No {tab} orders</p>
          </div>
        ) : (
          <div className="space-y-3">
            {orders.map((order) => (
              <Link to={`/order-tracking/${order.id}`} key={order.id} className="block bg-card rounded-2xl p-4 border border-border/50 shadow-soft hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Package size={16} className="text-primary" />
                    </div>
                    <span className="text-sm font-bold">{order.id}</span>
                  </div>
                  <ChevronRight size={18} className="text-muted-foreground" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">{order.date}</p>
                    <p className="text-sm font-bold text-primary mt-0.5">Rs.{order.total}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full capitalize ${statusColors[order.status]}`}>
                    {order.status}
                  </span>
                </div>
                <div className="flex gap-1.5 mt-3">
                  {order.items.slice(0, 3).map((item) => (
                    <img key={item.id} src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover border border-border" />
                  ))}
                  {order.items.length > 3 && (
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                      +{order.items.length - 3}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </CustomerLayout>
  );
};

export default OrdersPage;
