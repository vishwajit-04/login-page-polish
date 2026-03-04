import { motion } from "framer-motion";
import { Target, Plus, CheckCircle2, Circle, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

const habits = [
  { name: "Morning Meditation", streak: 12, completed: true, time: "6:30 AM" },
  { name: "Drink Water (8 glasses)", streak: 5, completed: false, time: "All day" },
  { name: "Exercise 30 min", streak: 8, completed: true, time: "7:00 AM" },
  { name: "Read 20 pages", streak: 3, completed: false, time: "9:00 PM" },
  { name: "No phone before bed", streak: 15, completed: true, time: "10:00 PM" },
  { name: "Journal 10 min", streak: 7, completed: false, time: "9:30 PM" },
];

export default function Habits() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Habit Builder</h1>
          <p className="text-sm text-muted-foreground mt-1">Build better habits with AI-powered scheduling</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" /> Add Habit
        </Button>
      </motion.div>

      <div className="space-y-3">
        {habits.map((habit, i) => (
          <motion.div
            key={habit.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="glass-card glass-card-hover rounded-2xl p-4 flex items-center gap-4 transition-all cursor-pointer"
          >
            <button className="shrink-0">
              {habit.completed ? (
                <CheckCircle2 className="w-6 h-6 text-primary" />
              ) : (
                <Circle className="w-6 h-6 text-muted-foreground" />
              )}
            </button>
            <div className="flex-1 min-w-0">
              <p className={`font-medium ${habit.completed ? "line-through text-muted-foreground" : "text-foreground"}`}>
                {habit.name}
              </p>
              <p className="text-xs text-muted-foreground">{habit.time}</p>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-warning/10 shrink-0">
              <Flame className="w-3.5 h-3.5 text-warning" />
              <span className="text-xs font-bold text-warning">{habit.streak}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
