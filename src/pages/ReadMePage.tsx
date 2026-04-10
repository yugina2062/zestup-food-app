import { Link } from "react-router-dom";
import { ArrowLeft, Shield, User, Database, Palette, Code } from "lucide-react";

const ReadMePage = () => (
  <div className="min-h-screen bg-background p-4 md:p-8">
    <div className="max-w-3xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <h1 className="text-2xl font-bold text-primary mb-2">ZestyJars — ReadMe</h1>
      <p className="text-sm text-muted-foreground mb-8">Setup instructions, credentials & project overview</p>

      {/* Credentials */}
      <section className="bg-card border border-border rounded-2xl p-6 mb-4">
        <h2 className="font-bold text-lg flex items-center gap-2 mb-4"><Shield size={18} className="text-primary" /> Login Credentials</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-muted rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2"><User size={16} className="text-secondary" /><span className="font-semibold text-sm">Customer Account</span></div>
            <p className="text-xs text-muted-foreground">Email: <span className="font-mono text-foreground">user@zestyjars.com</span></p>
            <p className="text-xs text-muted-foreground">Password: <span className="font-mono text-foreground">user123</span></p>
          </div>
          <div className="bg-muted rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2"><Shield size={16} className="text-primary" /><span className="font-semibold text-sm">Admin Account</span></div>
            <p className="text-xs text-muted-foreground">Email: <span className="font-mono text-foreground">admin@zestyjars.com</span></p>
            <p className="text-xs text-muted-foreground">Password: <span className="font-mono text-foreground">admin123</span></p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-card border border-border rounded-2xl p-6 mb-4">
        <h2 className="font-bold text-lg flex items-center gap-2 mb-4"><Code size={18} className="text-secondary" /> Technology Stack</h2>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {[
            "React 18 + TypeScript",
            "Tailwind CSS v3",
            "React Router v6",
            "Recharts (Charts)",
            "Lucide React (Icons)",
            "Shadcn/UI Components",
          ].map((t) => (
            <div key={t} className="bg-muted rounded-lg px-3 py-2 text-xs font-medium">{t}</div>
          ))}
        </div>
      </section>

      {/* Design System */}
      <section className="bg-card border border-border rounded-2xl p-6 mb-4">
        <h2 className="font-bold text-lg flex items-center gap-2 mb-4"><Palette size={18} className="text-accent" /> Design System</h2>
        <div className="flex gap-3 mb-3">
          <div className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-primary" /><span className="text-xs">Primary (Dark Red)</span></div>
          <div className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-secondary" /><span className="text-xs">Secondary (Olive Green)</span></div>
          <div className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-accent" /><span className="text-xs">Accent (Orange)</span></div>
        </div>
        <p className="text-xs text-muted-foreground">Typography: Poppins · 8px grid · Rounded corners · Card-based layout</p>
      </section>

      {/* Database */}
      <section className="bg-card border border-border rounded-2xl p-6 mb-4">
        <h2 className="font-bold text-lg flex items-center gap-2 mb-4"><Database size={18} className="text-primary" /> Database Tables</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {["Users", "Products", "Categories", "Cart", "Orders", "OrderItems", "Reviews", "Wishlist", "Coupons", "Notifications"].map((t) => (
            <div key={t} className="bg-muted rounded-lg px-3 py-2 text-xs font-medium">{t}</div>
          ))}
        </div>
      </section>

      {/* Pages */}
      <section className="bg-card border border-border rounded-2xl p-6">
        <h2 className="font-bold text-lg mb-4">📄 All Pages</h2>
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-1 text-xs text-muted-foreground">
          {[
            "/ — Landing Page",
            "/login — Login",
            "/register — Register",
            "/forgot-password — Forgot Password",
            "/products — Product Listing",
            "/product/:id — Product Detail",
            "/categories — Categories",
            "/cart — Shopping Cart",
            "/checkout — Checkout",
            "/order-success — Order Confirmation",
            "/orders — Order History",
            "/order-tracking/:id — Order Tracking",
            "/wishlist — Wishlist",
            "/notifications — Notifications",
            "/feedback — Reviews / Feedback",
            "/profile — User Profile",
            "/edit-profile — Edit Profile",
            "/admin — Admin Dashboard",
            "/admin/users — Manage Users",
            "/admin/products — Manage Products",
            "/admin/categories — Manage Categories",
            "/admin/orders — Manage Orders",
            "/admin/coupons — Manage Coupons",
            "/admin/reports — Reports & Analytics",
            "/admin/notifications — Admin Notifications",
            "/admin/profile — Admin Profile",
            "/readme — This Page",
          ].map((p) => (
            <p key={p} className="py-1 border-b border-border/50 font-mono">{p}</p>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default ReadMePage;
