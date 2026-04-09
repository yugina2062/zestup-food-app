import { useState } from "react";
import CustomerLayout from "@/components/layout/CustomerLayout";
import { Star, Camera, X } from "lucide-react";
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
          <p className="text-sm text-muted-foreground">Your feedback helps us improve ZestyJars</p>
        </div>
      </CustomerLayout>
    );
  }

  return (
    <CustomerLayout>
      <div className="px-4 mt-4 mb-6">
        <h1 className="text-lg font-bold mb-1">Share Your Review</h1>
        <p className="text-sm text-muted-foreground mb-6">How was your experience with ZestyJars?</p>

        {/* Star Rating */}
        <div className="bg-card rounded-2xl border border-border/50 p-5 mb-4 shadow-soft">
          <p className="text-xs font-medium text-muted-foreground mb-3 text-center">Tap to rate</p>
          <div className="flex gap-2 justify-center mb-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <button key={s} onMouseEnter={() => setHover(s)} onMouseLeave={() => setHover(0)} onClick={() => setRating(s)}>
                <Star size={36} className={`transition-colors ${(hover || rating) >= s ? "text-accent fill-accent" : "text-muted"}`} />
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-xs text-center text-muted-foreground">
              {rating === 5 ? "Amazing!" : rating === 4 ? "Great!" : rating === 3 ? "Good" : rating === 2 ? "Fair" : "Poor"}
            </p>
          )}
        </div>

        {/* Comment */}
        <Textarea placeholder="Tell us more about your experience..." className="rounded-xl mb-4 min-h-[120px]" />

        {/* Image Upload */}
        <div className="mb-6">
          <p className="text-xs font-medium text-muted-foreground mb-2">Add Photos (optional)</p>
          <button className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-border rounded-xl text-sm text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors w-full justify-center">
            <Camera size={18} />
            <span>Upload Images</span>
          </button>
        </div>

        <Button onClick={() => setSubmitted(true)} className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-semibold hover:opacity-90">
          Submit Review
        </Button>
      </div>
    </CustomerLayout>
  );
};

export default FeedbackPage;
