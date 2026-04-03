import { Menu, ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const TopNav = () => {
  const { cartCount } = useCart();
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/orders", label: "My Orders" },
    { to: "/profile", label: "Profile" },
    { to: "/admin", label: "Admin Panel" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-4 h-14 max-w-5xl mx-auto">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="p-2 -ml-2 rounded-lg hover:bg-muted transition-colors">
              <Menu size={22} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-bold text-primary">ZestUp</h2>
              <p className="text-xs text-muted-foreground mt-1">Preserved Goodness</p>
            </div>
            <nav className="flex flex-col p-4 gap-1">
              {menuLinks.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg hover:bg-muted text-sm font-medium transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <Link to="/" className="text-xl font-bold text-primary tracking-tight">
          Zest<span className="text-secondary">Up</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link to="/products" className="p-2 rounded-lg hover:bg-muted transition-colors">
            <Search size={20} />
          </Link>
          <Link to="/cart" className="p-2 rounded-lg hover:bg-muted transition-colors relative">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-secondary text-secondary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
