import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", stress: 45, focus: 78, productivity: 82 },
  { day: "Tue", stress: 52, focus: 72, productivity: 75 },
  { day: "Wed", stress: 38, focus: 85, productivity: 88 },
  { day: "Thu", stress: 65, focus: 60, productivity: 62 },
  { day: "Fri", stress: 42, focus: 80, productivity: 85 },
  { day: "Sat", stress: 30, focus: 90, productivity: 70 },
  { day: "Sun", stress: 25, focus: 65, productivity: 50 },
];

export default function WeeklyChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card rounded-2xl p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-foreground">Weekly Overview</h3>
        <div className="flex gap-3 text-xs">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-destructive" /> Stress
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-primary" /> Focus
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-info" /> Productivity
          </span>
        </div>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="stressGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(0, 72%, 55%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(0, 72%, 55%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="focusGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(158, 64%, 42%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(158, 64%, 42%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="prodGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(210, 100%, 60%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(210, 100%, 60%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" />
            <XAxis dataKey="day" stroke="hsl(210, 10%, 55%)" fontSize={11} tickLine={false} />
            <YAxis stroke="hsl(210, 10%, 55%)" fontSize={11} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(220, 20%, 10%)",
                border: "1px solid hsl(220, 15%, 18%)",
                borderRadius: "12px",
                fontSize: "12px",
                color: "hsl(210, 20%, 92%)",
              }}
            />
            <Area type="monotone" dataKey="stress" stroke="hsl(0, 72%, 55%)" fill="url(#stressGrad)" strokeWidth={2} />
            <Area type="monotone" dataKey="focus" stroke="hsl(158, 64%, 42%)" fill="url(#focusGrad)" strokeWidth={2} />
            <Area type="monotone" dataKey="productivity" stroke="hsl(210, 100%, 60%)" fill="url(#prodGrad)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
