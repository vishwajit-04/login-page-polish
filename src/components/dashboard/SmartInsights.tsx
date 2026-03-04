import { motion } from "framer-motion";
import { Lightbulb, AlertTriangle, TrendingUp, Clock } from "lucide-react";

const insights = [
  {
    icon: AlertTriangle,
    color: "hsl(38, 92%, 50%)",
    title: "Burnout risk detected",
    desc: "Your stress has been rising for 3 days. Consider taking a break.",
    type: "warning",
  },
  {
    icon: Clock,
    color: "hsl(0, 72%, 55%)",
    title: "2.3 hrs wasted on Instagram",
    desc: "Your screen time on social media spiked today.",
    type: "alert",
  },
  {
    icon: TrendingUp,
    color: "hsl(158, 64%, 42%)",
    title: "Best study time: 6–9 AM",
    desc: "Your focus peaks in early morning. Plan deep work then.",
    type: "positive",
  },
  {
    icon: Lightbulb,
    color: "hsl(210, 100%, 60%)",
    title: "Try the Pomodoro technique",
    desc: "Based on your patterns, 25-min sessions could boost focus by 20%.",
    type: "tip",
  },
];

export default function SmartInsights() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="glass-card rounded-2xl p-5"
    >
      <h3 className="font-display font-semibold text-foreground mb-4">Smart Insights</h3>
      <div className="space-y-3">
        {insights.map((insight, i) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="flex gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <div className="p-2 rounded-lg shrink-0 self-start" style={{ backgroundColor: `${insight.color}15` }}>
              <insight.icon className="w-4 h-4" style={{ color: insight.color }} />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{insight.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{insight.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
