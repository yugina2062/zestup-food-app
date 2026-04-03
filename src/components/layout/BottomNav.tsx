import { Home, ShoppingCart, Heart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const BottomNav = () => {
  const { pathname } = useLocation();
  const { cartCount, wishlist } = useCart();

  const items = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/cart", icon: ShoppingCart, label: "Cart", badge: cartCount },
    { to: "/wishlist", icon: Heart, label: "Wishlist", badge: wishlist.length },
    { to: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around h-16 max-w-5xl mx-auto">
        {items.map((item) => {
          const active = pathname === item.to;
          return (
            <Link key={item.to} to={item.to} className="flex flex-col items-center gap-0.5 relative px-4 py-1">
              <div className={`p-1.5 rounded-xl transition-colors ${active ? "bg-primary/10" : ""}`}>
                <item.icon size={20} className={`transition-colors ${active ? "text-primary" : "text-muted-foreground"}`} fill={active ? "currentColor" : "none"} />
                {(item.badge ?? 0) > 0 && (
                  <span className="absolute top-0 right-2 bg-secondary text-secondary-foreground text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className={`text-[10px] font-medium ${active ? "text-primary" : "text-muted-foreground"}`}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
