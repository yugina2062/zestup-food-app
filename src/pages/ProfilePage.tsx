import CustomerLayout from "@/components/layout/CustomerLayout";
import { User, ShoppingBag, Heart, MessageSquare, LogOut, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { to: "/orders", label: "My Orders", icon: ShoppingBag },
  { to: "/wishlist", label: "My Wishlist", icon: Heart },
  { to: "/feedback", label: "Give Feedback", icon: MessageSquare },
];

const ProfilePage = () => (
  <CustomerLayout>
    <div className="px-4 mt-4 mb-6">
      <div className="flex items-center gap-4 bg-card rounded-2xl p-4 border border-border/50 shadow-soft mb-6">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <User size={28} className="text-primary" />
        </div>
        <div>
          <h2 className="font-bold text-lg">Priya Sharma</h2>
          <p className="text-sm text-muted-foreground">priya@example.com</p>
        </div>
      </div>

      <div className="space-y-2">
        {menuItems.map((item) => (
          <Link key={item.to} to={item.to} className="flex items-center justify-between bg-card rounded-xl p-4 border border-border/50 hover:shadow-soft transition-shadow">
            <div className="flex items-center gap-3">
              <item.icon size={20} className="text-primary" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
            <ChevronRight size={18} className="text-muted-foreground" />
          </Link>
        ))}
        <button className="flex items-center gap-3 w-full bg-card rounded-xl p-4 border border-border/50 hover:shadow-soft transition-shadow text-destructive">
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  </CustomerLayout>
);

export default ProfilePage;
