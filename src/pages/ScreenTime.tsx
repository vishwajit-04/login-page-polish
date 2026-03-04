import { motion } from "framer-motion";
import { Monitor, Smartphone, Globe, AlertCircle } from "lucide-react";

const apps = [
  { name: "Instagram", time: "2h 18m", pct: 35, color: "hsl(330, 70%, 55%)" },
  { name: "VS Code", time: "1h 45m", pct: 27, color: "hsl(210, 100%, 60%)" },
  { name: "Chrome", time: "1h 12m", pct: 18, color: "hsl(38, 92%, 50%)" },
  { name: "YouTube", time: "48m", pct: 12, color: "hsl(0, 72%, 55%)" },
  { name: "Others", time: "32m", pct: 8, color: "hsl(220, 15%, 40%)" },
];

export default function ScreenTime() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-display font-bold text-foreground">Screen Time Analyzer</h1>
        <p className="text-sm text-muted-foreground mt-1">Understand and optimize your digital habits</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: Monitor, label: "Total Screen Time", value: "6h 35m", color: "hsl(210, 100%, 60%)" },
          { icon: Smartphone, label: "Productive Time", value: "3h 12m", color: "hsl(158, 64%, 42%)" },
          { icon: AlertCircle, label: "Distraction Time", value: "2h 18m", color: "hsl(0, 72%, 55%)" },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-2xl p-5"
          >
            <div className="p-2 rounded-xl w-fit mb-3" style={{ backgroundColor: `${item.color}15` }}>
              <item.icon className="w-5 h-5" style={{ color: item.color }} />
            </div>
            <p className="text-xs text-muted-foreground">{item.label}</p>
            <p className="text-2xl font-display font-bold text-foreground mt-1">{item.value}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card rounded-2xl p-5"
      >
        <h3 className="font-display font-semibold text-foreground mb-4">App Usage Breakdown</h3>
        <div className="space-y-3">
          {apps.map((app, i) => (
            <div key={app.name} className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground font-medium">{app.name}</span>
                  <span className="text-muted-foreground">{app.time}</span>
                </div>
                <div className="h-2 rounded-full bg-border overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: app.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${app.pct}%` }}
                    transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
