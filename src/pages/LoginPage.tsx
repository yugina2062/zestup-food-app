import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  const [showPw, setShowPw] = useState(false);
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-1">Welcome Back</h1>
        <p className="text-sm text-muted-foreground text-center mb-8">Log in to your ZestUp account</p>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Email</label>
            <Input type="email" placeholder="you@example.com" />
          </div>
          <div className="relative">
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Password</label>
            <Input type={showPw ? "text" : "password"} placeholder="••••••••" />
            <button onClick={() => setShowPw(!showPw)} className="absolute right-3 top-8 text-muted-foreground">
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          <div className="text-right">
            <Link to="#" className="text-xs text-primary font-medium">Forgot password?</Link>
          </div>
          <Button className="w-full bg-primary text-primary-foreground hover:opacity-90 rounded-xl h-12 font-semibold">
            Log In
          </Button>
        </div>
        <p className="text-sm text-center mt-6 text-muted-foreground">
          Don't have an account? <Link to="/register" className="text-primary font-semibold">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
