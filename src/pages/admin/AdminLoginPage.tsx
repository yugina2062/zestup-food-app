import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-1">Admin Login</h1>
        <p className="text-sm text-muted-foreground text-center mb-8">ZestyJars Management Panel</p>
        <div className="space-y-4">
          <Input placeholder="Admin email" className="rounded-xl" />
          <Input type="password" placeholder="Password" className="rounded-xl" />
          <Button onClick={() => navigate("/admin")} className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-semibold hover:opacity-90">
            Login
          </Button>
        </div>
        <p className="text-sm text-center mt-6"><Link to="/" className="text-primary font-medium">← Back to Store</Link></p>
      </div>
    </div>
  );
};

export default AdminLoginPage;
