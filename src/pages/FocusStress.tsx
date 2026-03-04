import { motion } from "framer-motion";
import { Brain, Activity, Timer, TrendingDown } from "lucide-react";

export default function FocusStress() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-display font-bold text-foreground">Focus & Stress Engine</h1>
        <p className="text-sm text-muted-foreground mt-1">Monitor your mental state and optimize performance</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { icon: Brain, title: "Focus Timer", desc: "Start a deep focus session with Pomodoro technique", color: "hsl(158, 64%, 42%)" },
          { icon: Activity, title: "Stress Monitor", desc: "Real-time stress analysis based on your activity patterns", color: "hsl(0, 72%, 55%)" },
          { icon: Timer, title: "Break Scheduler", desc: "AI-optimized break times based on your focus cycles", color: "hsl(210, 100%, 60%)" },
          { icon: TrendingDown, title: "Burnout Prediction", desc: "ML-based burnout risk assessment and prevention", color: "hsl(270, 60%, 60%)" },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card glass-card-hover rounded-2xl p-6 cursor-pointer transition-all"
          >
            <div className="p-3 rounded-xl w-fit mb-4" style={{ backgroundColor: `${item.color}15` }}>
              <item.icon className="w-6 h-6" style={{ color: item.color }} />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
