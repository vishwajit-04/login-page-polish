import { motion } from "framer-motion";
import { Download, Calendar, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const weeklyData = [
  { week: "W1", stress: 55, focus: 65, productivity: 70 },
  { week: "W2", stress: 48, focus: 72, productivity: 75 },
  { week: "W3", stress: 42, focus: 78, productivity: 82 },
  { week: "W4", stress: 35, focus: 85, productivity: 88 },
];

export default function Reports() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-sm text-muted-foreground mt-1">Weekly mental health and productivity insights</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="w-4 h-4" /> Export CSV
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: TrendingUp, label: "Avg. Focus Score", value: "75", change: "+12%", color: "hsl(158, 64%, 42%)" },
          { icon: BarChart3, label: "Avg. Productivity", value: "79%", change: "+8%", color: "hsl(210, 100%, 60%)" },
          { icon: Calendar, label: "Active Days", value: "24/30", change: "+3", color: "hsl(38, 92%, 50%)" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-2xl p-5"
          >
            <div className="p-2 rounded-xl w-fit mb-2" style={{ backgroundColor: `${s.color}15` }}>
              <s.icon className="w-5 h-5" style={{ color: s.color }} />
            </div>
            <p className="text-xs text-muted-foreground">{s.label}</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-display font-bold text-foreground">{s.value}</span>
              <span className="text-xs text-success font-medium">{s.change}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card rounded-2xl p-5"
      >
        <h3 className="font-display font-semibold text-foreground mb-4">Monthly Progress</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" />
              <XAxis dataKey="week" stroke="hsl(210, 10%, 55%)" fontSize={12} />
              <YAxis stroke="hsl(210, 10%, 55%)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(220, 20%, 10%)",
                  border: "1px solid hsl(220, 15%, 18%)",
                  borderRadius: "12px",
                  fontSize: "12px",
                  color: "hsl(210, 20%, 92%)",
                }}
              />
              <Bar dataKey="focus" fill="hsl(158, 64%, 42%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="productivity" fill="hsl(210, 100%, 60%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="stress" fill="hsl(0, 72%, 55%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}
