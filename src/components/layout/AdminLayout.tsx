import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, Package, FolderOpen, ShoppingBag, Ticket, LogOut } from "lucide-react";

const adminLinks = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/users", label: "Users", icon: Users },
  { to: "/admin/products", label: "Products", icon: Package },
  { to: "/admin/categories", label: "Categories", icon: FolderOpen },
  { to: "/admin/orders", label: "Orders", icon: ShoppingBag },
  { to: "/admin/coupons", label: "Coupons", icon: Ticket },
];

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar - hidden on mobile, shown as bottom bar */}
      <aside className="hidden md:flex flex-col w-56 bg-card border-r border-border p-4 fixed h-full">
        <Link to="/admin" className="text-xl font-bold text-primary mb-6 px-2">
          Zest<span className="text-secondary">Up</span> <span className="text-xs text-muted-foreground font-normal">Admin</span>
        </Link>
        <nav className="flex flex-col gap-1 flex-1">
          {adminLinks.map((l) => (
            <Link key={l.to} to={l.to} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              pathname === l.to ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground"
            }`}>
              <l.icon size={18} /> {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/" className="flex items-center gap-3 px-3 py-2.5 text-sm text-muted-foreground hover:text-destructive transition-colors">
          <LogOut size={18} /> Exit Admin
        </Link>
      </aside>

      <div className="flex-1 md:ml-56">
        {/* Mobile top bar */}
        <header className="md:hidden sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border px-4 h-14 flex items-center justify-between">
          <Link to="/admin" className="text-lg font-bold text-primary">ZestUp <span className="text-xs text-muted-foreground font-normal">Admin</span></Link>
          <Link to="/" className="text-xs text-muted-foreground">Exit</Link>
        </header>

        <main className="p-4 pb-20 md:pb-4">{children}</main>

        {/* Mobile bottom nav */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border flex justify-around py-2">
          {adminLinks.slice(0, 5).map((l) => (
            <Link key={l.to} to={l.to} className={`flex flex-col items-center gap-0.5 px-2 ${
              pathname === l.to ? "text-primary" : "text-muted-foreground"
            }`}>
              <l.icon size={18} />
              <span className="text-[9px] font-medium">{l.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default AdminLayout;
