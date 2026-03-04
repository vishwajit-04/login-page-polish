import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const tips = [
  "Take a 5-minute walk every hour to reduce stress by 30%",
  "Blue light filter after 8PM improves sleep quality by 25%",
  "Morning meditation for 10 min can boost focus for 4 hours",
];

export default function TipsBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="rounded-2xl p-5 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(158 64% 42% / 0.15), hsl(270 60% 60% / 0.1))",
        border: "1px solid hsl(158 64% 42% / 0.2)",
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-primary" />
        <h3 className="font-display font-semibold text-foreground text-sm">AI Wellness Tips</h3>
      </div>
      <div className="space-y-2">
        {tips.map((tip, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 + i * 0.15 }}
            className="flex items-start gap-2 text-xs text-foreground/80"
          >
            <ArrowRight className="w-3 h-3 text-primary mt-0.5 shrink-0" />
            <span>{tip}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
