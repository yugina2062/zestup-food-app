import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const OrderSuccessPage = () => (
  <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}>
      <CheckCircle size={72} className="text-primary mx-auto mb-4" />
    </motion.div>
    <h1 className="text-2xl font-bold mb-2">Order Placed!</h1>
    <p className="text-sm text-muted-foreground mb-1">Thank you for shopping with ZestyJars</p>
    <p className="text-sm font-semibold mb-6">Order ID: <span className="text-primary">ZU-{Math.floor(10000 + Math.random() * 90000)}</span></p>
    <div className="flex flex-col gap-3 w-full max-w-xs">
      <Link to="/order-tracking/ZU-10042">
        <Button className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-semibold hover:opacity-90">Track Order</Button>
      </Link>
      <Link to="/">
        <Button variant="outline" className="w-full rounded-xl h-12 font-semibold">Continue Shopping</Button>
      </Link>
    </div>
  </div>
);

export default OrderSuccessPage;
