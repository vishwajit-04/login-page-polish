import { motion } from "framer-motion";
import { Sun, Zap, Clock, Moon } from "lucide-react";

const timeBlocks = [
  { label: "Morning", icon: Sun, hours: "6–12", productivity: 85, color: "hsl(38, 92%, 50%)" },
  { label: "Afternoon", icon: Zap, hours: "12–18", productivity: 72, color: "hsl(158, 64%, 42%)" },
  { label: "Evening", icon: Clock, hours: "18–22", productivity: 45, color: "hsl(270, 60%, 60%)" },
  { label: "Night", icon: Moon, hours: "22–6", productivity: 20, color: "hsl(210, 100%, 60%)" },
];

export default function TodaySummary() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glass-card rounded-2xl p-5"
    >
      <h3 className="font-display font-semibold text-foreground mb-4">Today's Summary</h3>
      <div className="space-y-3">
        {timeBlocks.map((block, i) => (
          <div key={block.label} className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg" style={{ backgroundColor: `${block.color}20` }}>
              <block.icon className="w-3.5 h-3.5" style={{ color: block.color }} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">{block.label} <span className="text-muted-foreground/50">{block.hours}</span></span>
                <span className="font-medium text-foreground">{block.productivity}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-border overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: block.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${block.productivity}%` }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
