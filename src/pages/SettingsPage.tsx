import { motion } from "framer-motion";
import { User, Bell, Shield, Palette, Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const settings = [
  { icon: Bell, label: "Push Notifications", desc: "Get reminders and alerts", enabled: true },
  { icon: Moon, label: "Dark Mode", desc: "Toggle dark theme", enabled: true },
  { icon: Shield, label: "Focus Mode", desc: "Block distracting apps", enabled: false },
  { icon: Palette, label: "Wellness Reminders", desc: "Hourly break reminders", enabled: true },
];

export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-display font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Customize your wellness experience</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-2xl p-5"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center">
            <User className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-foreground">Alex Johnson</h3>
            <p className="text-sm text-muted-foreground">alex@wellness.com</p>
          </div>
        </div>

        <div className="space-y-4">
          {settings.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="flex items-center justify-between py-3 border-b border-border/30 last:border-0"
            >
              <div className="flex items-center gap-3">
                <s.icon className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">{s.label}</p>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </div>
              </div>
              <Switch defaultChecked={s.enabled} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
