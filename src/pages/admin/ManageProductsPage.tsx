import AdminLayout from "@/components/layout/AdminLayout";
import { products } from "@/data/mockData";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const ManageProductsPage = () => (
  <AdminLayout>
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-lg font-bold">Manage Products</h1>
      <Button size="sm" className="bg-primary text-primary-foreground rounded-xl gap-1"><Plus size={16} /> Add Product</Button>
    </div>
    <div className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-soft">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-left p-3 font-semibold">Product</th>
              <th className="text-left p-3 font-semibold">Price</th>
              <th className="text-left p-3 font-semibold hidden sm:table-cell">Category</th>
              <th className="text-left p-3 font-semibold hidden sm:table-cell">Stock</th>
              <th className="text-right p-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t border-border">
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <img src={p.image} alt={p.name} className="w-8 h-8 rounded-lg object-cover" />
                    <span className="font-medium line-clamp-1">{p.name}</span>
                  </div>
                </td>
                <td className="p-3">₹{p.price}</td>
                <td className="p-3 text-muted-foreground hidden sm:table-cell">{p.category}</td>
                <td className="p-3 hidden sm:table-cell">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${p.inStock ? "bg-olive-light text-primary" : "bg-destructive/10 text-destructive"}`}>
                    {p.inStock ? "In Stock" : "Out"}
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

export default ManageProductsPage;
