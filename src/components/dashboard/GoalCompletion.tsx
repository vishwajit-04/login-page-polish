import { motion } from "framer-motion";
import { CheckCircle2, Circle, Trophy } from "lucide-react";

const goals = [
  { name: "Study 4 hours", completed: true },
  { name: "30 min exercise", completed: true },
  { name: "Drink 8 glasses", completed: false },
  { name: "No social media till 5PM", completed: false },
  { name: "Read 20 pages", completed: true },
  { name: "Sleep by 11PM", completed: false },
];

export default function GoalCompletion() {
  const completed = goals.filter((g) => g.completed).length;
  const pct = Math.round((completed / goals.length) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="glass-card rounded-2xl p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-foreground">Daily Goals</h3>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10">
          <Trophy className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-bold text-primary">{pct}%</span>
        </div>
      </div>

      <div className="space-y-2">
        {goals.map((goal, i) => (
          <motion.div
            key={goal.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.05 }}
            className={`flex items-center gap-2.5 py-1.5 px-2 rounded-lg transition-colors ${
              goal.completed ? "opacity-60" : "hover:bg-muted/30"
            }`}
          >
            {goal.completed ? (
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
            ) : (
              <Circle className="w-4 h-4 text-muted-foreground shrink-0" />
            )}
            <span className={`text-sm ${goal.completed ? "line-through text-muted-foreground" : "text-foreground"}`}>
              {goal.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
