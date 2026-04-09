import AdminLayout from "@/components/layout/AdminLayout";
import { Users, ShoppingBag, IndianRupee, Package, TrendingUp, AlertTriangle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const stats = [
  { label: "Total Users", value: "1,284", icon: Users, change: "+12%", color: "bg-primary/10 text-primary" },
  { label: "Total Orders", value: "856", icon: ShoppingBag, change: "+8%", color: "bg-secondary/10 text-secondary" },
  { label: "Revenue", value: "Rs.2,45,000", icon: IndianRupee, change: "+15%", color: "bg-accent/10 text-accent" },
  { label: "Products", value: "24", icon: Package, change: "+3", color: "bg-muted text-muted-foreground" },
];

const chartData = [
  { month: "Jan", sales: 12000 },
  { month: "Feb", sales: 18000 },
  { month: "Mar", sales: 24000 },
  { month: "Apr", sales: 21000 },
  { month: "May", sales: 32000 },
  { month: "Jun", sales: 28000 },
];

const pieData = [
  { name: "Mango", value: 35 },
  { name: "Chili", value: 25 },
  { name: "Mixed", value: 20 },
  { name: "Others", value: 20 },
];

const COLORS = ["hsl(0, 60%, 30%)", "hsl(137, 20%, 30%)", "hsl(25, 85%, 50%)", "hsl(30, 15%, 70%)"];

const recentOrders = [
  { id: "ZJ-10045", customer: "Sita Sharma", total: "Rs.567", status: "pending" },
  { id: "ZJ-10044", customer: "Ram Thapa", total: "Rs.249", status: "processing" },
  { id: "ZJ-10043", customer: "Anita G.", total: "Rs.890", status: "delivered" },
];

const statusColors: Record<string, string> = {
  pending: "bg-accent/10 text-accent",
  processing: "bg-primary/10 text-primary",
  delivered: "bg-secondary/10 text-secondary",
};

const AdminDashboard = () => (
  <AdminLayout>
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-lg font-bold">Dashboard</h1>
        <p className="text-xs text-muted-foreground">Welcome back, Admin</p>
      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      {stats.map((s) => (
        <div key={s.label} className="bg-card rounded-2xl p-4 border border-border/50 shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center`}>
              <s.icon size={20} />
            </div>
            <span className="text-[10px] font-medium text-secondary flex items-center gap-0.5">
              <TrendingUp size={10} /> {s.change}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">{s.label}</p>
          <p className="text-lg font-bold">{s.value}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {/* Sales Chart */}
      <div className="md:col-span-2 bg-card rounded-2xl p-4 border border-border/50 shadow-soft">
        <h3 className="text-sm font-semibold mb-4">Sales Overview</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(30 15% 88%)" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="sales" fill="hsl(0 60% 30%)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Category Pie */}
      <div className="bg-card rounded-2xl p-4 border border-border/50 shadow-soft">
        <h3 className="text-sm font-semibold mb-4">Sales by Category</h3>
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie data={pieData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value">
              {pieData.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-wrap gap-2 mt-2 justify-center">
          {pieData.map((d, i) => (
            <div key={d.name} className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[i] }} />
              <span className="text-[10px] text-muted-foreground">{d.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Recent Orders & Alerts */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-card rounded-2xl p-4 border border-border/50 shadow-soft">
        <h3 className="text-sm font-semibold mb-3">Recent Orders</h3>
        <div className="space-y-2">
          {recentOrders.map((o) => (
            <div key={o.id} className="flex items-center justify-between p-2.5 rounded-xl bg-muted/50">
              <div>
                <p className="text-xs font-semibold">{o.id}</p>
                <p className="text-[10px] text-muted-foreground">{o.customer}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold">{o.total}</p>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full capitalize ${statusColors[o.status]}`}>
                  {o.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card rounded-2xl p-4 border border-border/50 shadow-soft">
        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
          <AlertTriangle size={14} className="text-accent" /> Stock Alerts
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-accent/5 border border-accent/20">
            <span className="text-xs font-medium">Green Chili Pickle</span>
            <span className="text-[10px] font-bold text-destructive">Out of Stock</span>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-accent/5 border border-accent/20">
            <span className="text-xs font-medium">Lemon Pickle</span>
            <span className="text-[10px] font-bold text-accent">Low Stock (5)</span>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-accent/5 border border-accent/20">
            <span className="text-xs font-medium">Carrot Pickle</span>
            <span className="text-[10px] font-bold text-accent">Low Stock (8)</span>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
);

export default AdminDashboard;
