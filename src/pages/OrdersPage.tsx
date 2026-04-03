import CustomerLayout from "@/components/layout/CustomerLayout";
import { sampleOrders } from "@/data/mockData";
import { Link } from "react-router-dom";
import { ChevronRight, Package } from "lucide-react";

const statusColors: Record<string, string> = {
  pending: "bg-gold-light text-secondary",
  processing: "bg-olive-light text-primary",
  shipped: "bg-primary/10 text-primary",
  delivered: "bg-primary text-primary-foreground",
};

const OrdersPage = () => (
  <CustomerLayout>
    <div className="px-4 mt-4 mb-6">
      <h1 className="text-lg font-bold mb-4">My Orders</h1>
      <div className="space-y-3">
        {sampleOrders.map((order) => (
          <Link to={`/order-tracking/${order.id}`} key={order.id} className="block bg-card rounded-xl p-4 border border-border/50 shadow-soft hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Package size={18} className="text-primary" />
                <span className="text-sm font-bold">{order.id}</span>
              </div>
              <ChevronRight size={18} className="text-muted-foreground" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">{order.date}</p>
                <p className="text-sm font-semibold mt-0.5">₹{order.total}</p>
              </div>
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full capitalize ${statusColors[order.status]}`}>
                {order.status}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </CustomerLayout>
);

export default OrdersPage;
