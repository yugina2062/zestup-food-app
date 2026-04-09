import { Menu, ShoppingCart, Search, Heart, User, Home, Package, Bell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const TopNav = () => {
  const { cartCount, wishlist } = useCart();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/orders", label: "My Orders" },
    { to: "/wishlist", label: "Wishlist" },
    { to: "/notifications", label: "Notifications" },
    { to: "/profile", label: "Profile" },
    { to: "/admin/login", label: "Admin Panel" },
  ];

  const desktopNavLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/products", label: "Products", icon: Package },
    { to: "/orders", label: "Orders", icon: Package },
    { to: "/feedback", label: "Feedback", icon: Package },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="flex items-center justify-between px-4 md:px-6 h-14 md:h-16 max-w-7xl mx-auto">
        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="p-2 -ml-2 rounded-xl hover:bg-muted transition-colors md:hidden">
              <Menu size={22} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <div className="p-6 border-b border-border bg-primary/5">
              <h2 className="text-xl font-bold text-primary">ZestyJars</h2>
              <p className="text-[11px] text-muted-foreground mt-1">Authentic Nepali Homemade Foods</p>
            </div>
            <nav className="flex flex-col p-3 gap-0.5">
              {menuLinks.map((l) => {
                const active = pathname === l.to;
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      active ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight">
          <span className="text-primary">Zesty</span>
          <span className="text-secondary">Jars</span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {desktopNavLinks.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-0.5 md:gap-1.5">
          <Link to="/products" className="p-2 rounded-xl hover:bg-muted transition-colors">
            <Search size={20} />
          </Link>
          <Link to="/notifications" className="p-2 rounded-xl hover:bg-muted transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
          </Link>
          <Link to="/wishlist" className="hidden md:flex p-2 rounded-xl hover:bg-muted transition-colors relative">
            <Heart size={20} />
            {wishlist.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-accent text-accent-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="p-2 rounded-xl hover:bg-muted transition-colors relative">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <Link to="/profile" className="hidden md:flex p-2 rounded-xl hover:bg-muted transition-colors">
            <User size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
