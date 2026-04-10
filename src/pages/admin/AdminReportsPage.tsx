import AdminLayout from "@/components/layout/AdminLayout";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, CartesianGrid } from "recharts";

const monthlySales = [
  { month: "Jan", sales: 12400 },
  { month: "Feb", sales: 15800 },
  { month: "Mar", sales: 18200 },
  { month: "Apr", sales: 14600 },
  { month: "May", sales: 21000 },
  { month: "Jun", sales: 19500 },
];

const categoryData = [
  { name: "Mango", value: 35, color: "hsl(var(--primary))" },
  { name: "Chili", value: 25, color: "hsl(var(--destructive))" },
  { name: "Mixed", value: 20, color: "hsl(var(--secondary))" },
  { name: "Lemon", value: 12, color: "hsl(var(--accent))" },
  { name: "Other", value: 8, color: "hsl(var(--muted-foreground))" },
];

const orderTrend = [
  { day: "Mon", orders: 18 },
  { day: "Tue", orders: 24 },
  { day: "Wed", orders: 30 },
  { day: "Thu", orders: 22 },
  { day: "Fri", orders: 35 },
  { day: "Sat", orders: 42 },
  { day: "Sun", orders: 28 },
];

const topProducts = [
  { name: "Mango Pickle", sold: 320, revenue: "Rs 79,680" },
  { name: "Mixed Vegetable Pickle", sold: 215, revenue: "Rs 60,585" },
  { name: "Amla Pickle", sold: 190, revenue: "Rs 49,210" },
  { name: "Garlic Pickle", sold: 154, revenue: "Rs 33,726" },
  { name: "Red Chili Pickle", sold: 96, revenue: "Rs 19,104" },
];

const AdminReportsPage = () => (
  <AdminLayout>
    <div className="mb-6">
      <h1 className="text-xl font-bold mb-1">Reports & Analytics</h1>
      <p className="text-sm text-muted-foreground">Business performance overview</p>
    </div>

    {/* Summary Cards */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
      {[
        { label: "Total Revenue", value: "Rs 1,01,500", change: "+12%", up: true },
        { label: "Total Orders", value: "342", change: "+8%", up: true },
        { label: "Avg Order Value", value: "Rs 297", change: "+3%", up: true },
        { label: "Return Rate", value: "2.1%", change: "-0.5%", up: false },
      ].map((s) => (
        <div key={s.label} className="bg-card border border-border rounded-2xl p-4">
          <p className="text-xs text-muted-foreground">{s.label}</p>
          <p className="text-lg font-bold mt-1">{s.value}</p>
          <span className={`text-xs font-medium ${s.up ? "text-secondary" : "text-destructive"}`}>{s.change}</span>
        </div>
      ))}
    </div>

    {/* Charts */}
    <div className="grid md:grid-cols-2 gap-4 mb-6">
      <div className="bg-card border border-border rounded-2xl p-4">
        <h3 className="font-semibold text-sm mb-4">Monthly Sales (Rs)</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={monthlySales}>
            <XAxis dataKey="month" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="sales" fill="hsl(0 60% 30%)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-card border border-border rounded-2xl p-4">
        <h3 className="font-semibold text-sm mb-4">Sales by Category</h3>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie data={categoryData} dataKey="value" cx="50%" cy="50%" outerRadius={80} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
              {categoryData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-4 mb-6">
      <div className="bg-card border border-border rounded-2xl p-4">
        <h3 className="font-semibold text-sm mb-4">Order Trend (This Week)</h3>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={orderTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="day" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Line type="monotone" dataKey="orders" stroke="hsl(137 20% 30%)" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-card border border-border rounded-2xl p-4">
        <h3 className="font-semibold text-sm mb-4">Top Selling Products</h3>
        <div className="space-y-3">
          {topProducts.map((p, i) => (
            <div key={p.name} className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">{i + 1}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.sold} sold</p>
              </div>
              <span className="text-sm font-semibold">{p.revenue}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </AdminLayout>
);

export default AdminReportsPage;
