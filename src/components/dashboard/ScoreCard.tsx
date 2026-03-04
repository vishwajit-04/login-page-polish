import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ScoreCardProps {
  title: string;
  score: number;
  maxScore?: number;
  icon: LucideIcon;
  color: string;
  trend?: string;
  description?: string;
}

export default function ScoreCard({
  title,
  score,
  maxScore = 100,
  icon: Icon,
  color,
  trend,
  description,
}: ScoreCardProps) {
  const percentage = (score / maxScore) * 100;
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card glass-card-hover rounded-2xl p-5 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          {description && (
            <p className="text-xs text-muted-foreground/60 mt-0.5">{description}</p>
          )}
        </div>
        <div className={`p-2 rounded-xl`} style={{ backgroundColor: `${color}20` }}>
          <Icon className="w-4 h-4" style={{ color }} />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 score-ring">
          <svg className="w-20 h-20 -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50" cy="50" r="40"
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="6"
            />
            <motion.circle
              cx="50" cy="50" r="40"
              fill="none"
              stroke={color}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-display font-bold text-foreground">{score}</span>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-1">
            {trend && (
              <span className={`text-xs font-medium ${
                trend.startsWith('+') ? 'text-success' : 'text-destructive'
              }`}>
                {trend}
              </span>
            )}
            <span className="text-xs text-muted-foreground">vs last week</span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-border overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: color }}
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
