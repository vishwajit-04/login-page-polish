import { motion } from "framer-motion";
import { Flame, Droplets, BookOpen, Dumbbell, Moon as MoonIcon } from "lucide-react";

const habits = [
  { name: "Meditate", icon: Droplets, streak: 12, goal: 15, color: "hsl(210, 100%, 60%)" },
  { name: "Read", icon: BookOpen, streak: 8, goal: 10, color: "hsl(38, 92%, 50%)" },
  { name: "Exercise", icon: Dumbbell, streak: 5, goal: 7, color: "hsl(158, 64%, 42%)" },
  { name: "Sleep 8h", icon: MoonIcon, streak: 3, goal: 7, color: "hsl(270, 60%, 60%)" },
];

export default function HabitStreaks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="glass-card rounded-2xl p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-foreground">Habit Streaks</h3>
        <div className="flex items-center gap-1 text-warning">
          <Flame className="w-4 h-4" />
          <span className="text-sm font-bold">28</span>
        </div>
      </div>

      <div className="space-y-3">
        {habits.map((habit, i) => {
          const pct = (habit.streak / habit.goal) * 100;
          return (
            <motion.div
              key={habit.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="p-1.5 rounded-lg" style={{ backgroundColor: `${habit.color}20` }}>
                <habit.icon className="w-3.5 h-3.5" style={{ color: habit.color }} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-foreground font-medium">{habit.name}</span>
                  <span className="text-muted-foreground">
                    {habit.streak}/{habit.goal} days
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-border overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: habit.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(pct, 100)}%` }}
                    transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
