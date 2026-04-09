import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ForgotPasswordPage = () => {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-sm text-center">
          <span className="text-5xl mb-4 block">📧</span>
          <h1 className="text-2xl font-bold mb-2">Check Your Email</h1>
          <p className="text-sm text-muted-foreground mb-6">
            We've sent a password reset link to your email address. Please check your inbox.
          </p>
          <Link to="/login">
            <Button className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-semibold">
              Back to Login
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <Link to="/login" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft size={16} /> Back to Login
        </Link>
        <h1 className="text-2xl font-bold mb-1">Forgot Password?</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Enter your email and we'll send you a reset link
        </p>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Email</label>
            <Input type="email" placeholder="you@example.com" className="rounded-xl h-12" />
          </div>
          <Button
            onClick={() => setSent(true)}
            className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-semibold hover:opacity-90"
          >
            Send Reset Link
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
