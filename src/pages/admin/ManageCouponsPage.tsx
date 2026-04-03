import AdminLayout from "@/components/layout/AdminLayout";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const coupons = [
  { id: 1, code: "ZEST20", discount: "20%", minOrder: 500, active: true, expiry: "Apr 30, 2026" },
  { id: 2, code: "NEWUSER", discount: "15%", minOrder: 300, active: true, expiry: "May 15, 2026" },
  { id: 3, code: "SUMMER10", discount: "10%", minOrder: 200, active: false, expiry: "Mar 31, 2026" },
];

const ManageCouponsPage = () => (
  <AdminLayout>
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-lg font-bold">Manage Coupons</h1>
      <Button size="sm" className="bg-primary text-primary-foreground rounded-xl gap-1"><Plus size={16} /> Add</Button>
    </div>
    <div className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-soft">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-left p-3 font-semibold">Code</th>
              <th className="text-left p-3 font-semibold">Discount</th>
              <th className="text-left p-3 font-semibold hidden sm:table-cell">Min Order</th>
              <th className="text-left p-3 font-semibold">Status</th>
              <th className="text-right p-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((c) => (
              <tr key={c.id} className="border-t border-border">
                <td className="p-3 font-mono font-bold text-primary">{c.code}</td>
                <td className="p-3">{c.discount}</td>
                <td className="p-3 text-muted-foreground hidden sm:table-cell">₹{c.minOrder}</td>
                <td className="p-3">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${c.active ? "bg-olive-light text-primary" : "bg-muted text-muted-foreground"}`}>
                    {c.active ? "Active" : "Expired"}
                  </span>
                </td>
                <td className="p-3 text-right">
                  <div className="flex gap-1 justify-end">
                    <button className="p-1.5 hover:bg-muted rounded-lg"><Pencil size={14} /></button>
                    <button className="p-1.5 hover:bg-destructive/10 rounded-lg text-destructive"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </AdminLayout>
);

export default ManageCouponsPage;
