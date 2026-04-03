import AdminLayout from "@/components/layout/AdminLayout";
import { sampleOrders } from "@/data/mockData";

const statuses = ["pending", "processing", "shipped", "delivered"];

const ManageOrdersPage = () => (
  <AdminLayout>
    <h1 className="text-lg font-bold mb-4">Manage Orders</h1>
    <div className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-soft">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-left p-3 font-semibold">Order ID</th>
              <th className="text-left p-3 font-semibold">Date</th>
              <th className="text-left p-3 font-semibold">Total</th>
              <th className="text-left p-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {sampleOrders.map((o) => (
              <tr key={o.id} className="border-t border-border">
                <td className="p-3 font-medium">{o.id}</td>
                <td className="p-3 text-muted-foreground">{o.date}</td>
                <td className="p-3">₹{o.total}</td>
                <td className="p-3">
                  <select defaultValue={o.status} className="text-xs bg-muted rounded-lg px-2 py-1 border-none font-medium capitalize">
                    {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </AdminLayout>
);

export default ManageOrdersPage;
