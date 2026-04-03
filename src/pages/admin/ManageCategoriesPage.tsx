import AdminLayout from "@/components/layout/AdminLayout";
import { categories } from "@/data/mockData";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const ManageCategoriesPage = () => (
  <AdminLayout>
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-lg font-bold">Manage Categories</h1>
      <Button size="sm" className="bg-primary text-primary-foreground rounded-xl gap-1"><Plus size={16} /> Add</Button>
    </div>
    <div className="space-y-2">
      {categories.map((cat) => (
        <div key={cat.id} className="flex items-center justify-between bg-card rounded-xl p-4 border border-border/50 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{cat.emoji}</span>
            <span className="font-medium">{cat.name}</span>
          </div>
          <div className="flex gap-1">
            <button className="p-1.5 hover:bg-muted rounded-lg"><Pencil size={14} /></button>
            <button className="p-1.5 hover:bg-destructive/10 rounded-lg text-destructive"><Trash2 size={14} /></button>
          </div>
        </div>
      ))}
    </div>
  </AdminLayout>
);

export default ManageCategoriesPage;
