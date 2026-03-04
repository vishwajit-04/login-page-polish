import { motion } from "framer-motion";
import { useState } from "react";

const moods = [
  { emoji: "😫", label: "Stressed", value: 1 },
  { emoji: "😔", label: "Low", value: 2 },
  { emoji: "😐", label: "Neutral", value: 3 },
  { emoji: "😊", label: "Good", value: 4 },
  { emoji: "🔥", label: "Amazing", value: 5 },
];

const weekMoods = [
  { day: "Mon", mood: 4 },
  { day: "Tue", mood: 3 },
  { day: "Wed", mood: 5 },
  { day: "Thu", mood: 2 },
  { day: "Fri", mood: 4 },
  { day: "Sat", mood: 5 },
  { day: "Sun", mood: 0 },
];

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card rounded-2xl p-5"
    >
      <h3 className="font-display font-semibold text-foreground mb-1">How are you feeling?</h3>
      <p className="text-xs text-muted-foreground mb-4">Track your daily mood</p>

      <div className="flex justify-between mb-5">
        {moods.map((mood) => (
          <motion.button
            key={mood.value}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedMood(mood.value)}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
              selectedMood === mood.value
                ? "bg-primary/20 ring-1 ring-primary/40"
                : "hover:bg-muted"
            }`}
          >
            <span className="text-2xl">{mood.emoji}</span>
            <span className="text-[10px] text-muted-foreground">{mood.label}</span>
          </motion.button>
        ))}
      </div>

      <div className="border-t border-border/50 pt-3">
        <p className="text-xs text-muted-foreground mb-2">This week</p>
        <div className="flex gap-1.5">
          {weekMoods.map((d, i) => (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
              <div
                className={`w-full aspect-square rounded-lg flex items-center justify-center text-sm ${
                  d.mood === 0 ? "bg-border/50 border border-dashed border-border" : ""
                }`}
                style={d.mood > 0 ? {
                  backgroundColor: `hsl(${100 + d.mood * 20}, ${40 + d.mood * 10}%, ${30 + d.mood * 5}%, 0.3)`,
                } : undefined}
              >
                {d.mood > 0 ? moods[d.mood - 1]?.emoji : ""}
              </div>
              <span className="text-[10px] text-muted-foreground">{d.day}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
