import CustomerLayout from "@/components/layout/CustomerLayout";
import { User, ShoppingBag, Heart, MessageSquare, LogOut, ChevronRight, Bell, Settings, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { to: "/orders", label: "My Orders", icon: ShoppingBag, desc: "Track & manage your orders" },
  { to: "/wishlist", label: "My Wishlist", icon: Heart, desc: "Items you've saved" },
  { to: "/notifications", label: "Notifications", icon: Bell, desc: "Updates & alerts" },
  { to: "/feedback", label: "Give Feedback", icon: MessageSquare, desc: "Rate your experience" },
];

const ProfilePage = () => (
  <CustomerLayout>
    <div className="px-4 mt-4 mb-6">
      {/* Profile Header */}
      <div className="bg-card rounded-2xl p-5 border border-border/50 shadow-soft mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <User size={28} className="text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-lg">Sita Sharma</h2>
            <p className="text-sm text-muted-foreground">sita@example.com</p>
            <div className="flex items-center gap-1 mt-1">
              <MapPin size={12} className="text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Kathmandu, Nepal</span>
            </div>
          </div>
        </div>
        <Link
          to="/edit-profile"
          className="mt-4 w-full block text-center py-2.5 rounded-xl border border-primary text-primary text-sm font-semibold hover:bg-primary/5 transition-colors"
        >
          Edit Profile
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-card rounded-xl p-3 border border-border/50 text-center shadow-soft">
          <p className="text-lg font-bold text-primary">12</p>
          <p className="text-[10px] text-muted-foreground font-medium">Orders</p>
        </div>
        <div className="bg-card rounded-xl p-3 border border-border/50 text-center shadow-soft">
          <p className="text-lg font-bold text-secondary">3</p>
          <p className="text-[10px] text-muted-foreground font-medium">Wishlist</p>
        </div>
        <div className="bg-card rounded-xl p-3 border border-border/50 text-center shadow-soft">
          <p className="text-lg font-bold text-accent">150</p>
          <p className="text-[10px] text-muted-foreground font-medium">Points</p>
        </div>
      </div>

      {/* Menu */}
      <div className="space-y-2">
        {menuItems.map((item) => (
          <Link key={item.to} to={item.to} className="flex items-center justify-between bg-card rounded-xl p-4 border border-border/50 hover:shadow-soft transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon size={18} className="text-primary" />
              </div>
              <div>
                <span className="text-sm font-medium block">{item.label}</span>
                <span className="text-[11px] text-muted-foreground">{item.desc}</span>
              </div>
            </div>
            <ChevronRight size={18} className="text-muted-foreground" />
          </Link>
        ))}
        <button className="flex items-center gap-3 w-full bg-card rounded-xl p-4 border border-border/50 hover:shadow-soft transition-shadow text-destructive">
          <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
            <LogOut size={18} />
          </div>
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  </CustomerLayout>
);

export default ProfilePage;
