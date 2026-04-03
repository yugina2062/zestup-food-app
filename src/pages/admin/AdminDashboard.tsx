import AdminLayout from "@/components/layout/AdminLayout";
import { Users, ShoppingBag, IndianRupee, Package } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const stats = [
  { label: "Total Users", value: "1,284", icon: Users, color: "bg-primary/10 text-primary" },
  { label: "Total Orders", value: "856", icon: ShoppingBag, color: "bg-secondary/20 text-secondary" },
  { label: "Revenue", value: "₹2,45,000", icon: IndianRupee, color: "bg-olive-light text-primary" },
  { label: "Products", value: "24", icon: Package, color: "bg-gold-light text-secondary" },
];

const chartData = [
  { month: "Jan", sales: 12000 },
  { month: "Feb", sales: 18000 },
  { month: "Mar", sales: 24000 },
  { month: "Apr", sales: 21000 },
  { month: "May", sales: 32000 },
  { month: "Jun", sales: 28000 },
];

const AdminDashboard = () => (
  <AdminLayout>
    <h1 className="text-lg font-bold mb-4">Dashboard</h1>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      {stats.map((s) => (
        <div key={s.label} className="bg-card rounded-xl p-4 border border-border/50 shadow-soft">
          <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center mb-2`}>
            <s.icon size={20} />
          </div>
          <p className="text-xs text-muted-foreground">{s.label}</p>
          <p className="text-lg font-bold">{s.value}</p>
        </div>
      ))}
    </div>

    <div className="bg-card rounded-xl p-4 border border-border/50 shadow-soft">
      <h3 className="text-sm font-semibold mb-4">Sales Overview</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(40 20% 88%)" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey="sales" fill="hsl(80 61% 34%)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </AdminLayout>
);

export default AdminDashboard;
