import { CheckCircle, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const OrderSuccessPage = () => {
  const orderId = `ZJ-${Math.floor(10000 + Math.random() * 90000)}`;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}>
        <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={40} className="text-secondary" />
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <h1 className="text-2xl font-bold mb-2">Order Placed!</h1>
        <p className="text-sm text-muted-foreground mb-1">Thank you for shopping with ZestyJars</p>
        <p className="text-sm font-semibold mb-2">
          Order ID: <span className="text-primary">{orderId}</span>
        </p>
        <p className="text-xs text-muted-foreground mb-6 max-w-xs mx-auto">
          You'll receive a confirmation email shortly. Track your order for real-time updates.
        </p>
        <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
          <Link to="/order-tracking/ZU-10042">
            <Button className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-semibold hover:opacity-90 gap-2">
              <Package size={18} /> Track Order
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline" className="w-full rounded-xl h-12 font-semibold gap-2">
              Continue Shopping <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderSuccessPage;
