import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [showPw, setShowPw] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <ShieldCheck size={20} className="text-primary" />
          </div>
        </div>
        <h1 className="text-xl font-bold text-center mb-1">Admin Login</h1>
        <p className="text-sm text-muted-foreground text-center mb-8">ZestyJars Management Panel</p>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Admin Email</label>
            <Input placeholder="admin@zestyjars.com" className="rounded-xl h-12" />
          </div>
          <div className="relative">
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Password</label>
            <Input type={showPw ? "text" : "password"} placeholder="••••••••" className="rounded-xl h-12 pr-10" />
            <button onClick={() => setShowPw(!showPw)} className="absolute right-3 top-9 text-muted-foreground">
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          <Button onClick={() => navigate("/admin")} className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-semibold hover:opacity-90">
            Login to Dashboard
          </Button>
        </div>
        <p className="text-sm text-center mt-6"><Link to="/" className="text-primary font-medium hover:underline">← Back to Store</Link></p>
      </div>
    </div>
  );
};

export default AdminLoginPage;
