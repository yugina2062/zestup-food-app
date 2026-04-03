import { useState } from "react";
import CustomerLayout from "@/components/layout/CustomerLayout";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <CustomerLayout>
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-5xl mb-4">🎉</motion.span>
          <h2 className="text-lg font-bold mb-1">Thank You!</h2>
          <p className="text-sm text-muted-foreground">Your feedback helps us improve</p>
        </div>
      </CustomerLayout>
    );
  }

  return (
    <CustomerLayout>
      <div className="px-4 mt-4 mb-6">
        <h1 className="text-lg font-bold mb-1">Share Feedback</h1>
        <p className="text-sm text-muted-foreground mb-6">How was your experience with ZestUp?</p>

        <div className="flex gap-2 mb-6 justify-center">
          {[1, 2, 3, 4, 5].map((s) => (
            <button key={s} onMouseEnter={() => setHover(s)} onMouseLeave={() => setHover(0)} onClick={() => setRating(s)}>
              <Star size={36} className={`transition-colors ${(hover || rating) >= s ? "text-secondary fill-secondary" : "text-muted"}`} />
            </button>
          ))}
        </div>

        <Textarea placeholder="Tell us more about your experience..." className="rounded-xl mb-4 min-h-[120px]" />

        <Button onClick={() => setSubmitted(true)} className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-semibold hover:opacity-90">
          Submit Feedback
        </Button>
      </div>
    </CustomerLayout>
  );
};

export default FeedbackPage;
