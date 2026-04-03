import AdminLayout from "@/components/layout/AdminLayout";
import { Pencil, Trash2 } from "lucide-react";

const users = [
  { id: 1, name: "Priya Sharma", email: "priya@email.com", orders: 12, joined: "Jan 2026" },
  { id: 2, name: "Rahul Kumar", email: "rahul@email.com", orders: 8, joined: "Feb 2026" },
  { id: 3, name: "Anita Mehra", email: "anita@email.com", orders: 15, joined: "Dec 2025" },
  { id: 4, name: "Vijay Singh", email: "vijay@email.com", orders: 3, joined: "Mar 2026" },
];

const ManageUsersPage = () => (
  <AdminLayout>
    <h1 className="text-lg font-bold mb-4">Manage Users</h1>
    <div className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-soft">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-left p-3 font-semibold">Name</th>
              <th className="text-left p-3 font-semibold hidden sm:table-cell">Email</th>
              <th className="text-left p-3 font-semibold">Orders</th>
              <th className="text-left p-3 font-semibold hidden sm:table-cell">Joined</th>
              <th className="text-right p-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t border-border">
                <td className="p-3 font-medium">{u.name}</td>
                <td className="p-3 text-muted-foreground hidden sm:table-cell">{u.email}</td>
                <td className="p-3">{u.orders}</td>
                <td className="p-3 text-muted-foreground hidden sm:table-cell">{u.joined}</td>
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

export default ManageUsersPage;
