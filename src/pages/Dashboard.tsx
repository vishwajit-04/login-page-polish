import { Brain, Zap, Monitor, Heart } from "lucide-react";
import ScoreCard from "@/components/dashboard/ScoreCard";
import TodaySummary from "@/components/dashboard/TodaySummary";
import MoodTracker from "@/components/dashboard/MoodTracker";
import HabitStreaks from "@/components/dashboard/HabitStreaks";
import WeeklyChart from "@/components/dashboard/WeeklyChart";
import GoalCompletion from "@/components/dashboard/GoalCompletion";
import SmartInsights from "@/components/dashboard/SmartInsights";
import TipsBox from "@/components/dashboard/TipsBox";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-display font-bold text-foreground">Good Morning, Alex 👋</h1>
        <p className="text-sm text-muted-foreground mt-1">Here's your wellness overview for today</p>
      </motion.div>

      {/* Score Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <ScoreCard
          title="Stress Level"
          score={35}
          icon={Heart}
          color="hsl(0, 72%, 55%)"
          trend="-12%"
          description="Low stress"
        />
        <ScoreCard
          title="Focus Score"
          score={78}
          icon={Brain}
          color="hsl(158, 64%, 42%)"
          trend="+8%"
          description="Great focus"
        />
        <ScoreCard
          title="Productivity"
          score={82}
          icon={Zap}
          color="hsl(210, 100%, 60%)"
          trend="+5%"
          description="Above average"
        />
        <ScoreCard
          title="Screen Time"
          score={65}
          icon={Monitor}
          color="hsl(270, 60%, 60%)"
          trend="-3%"
          description="4.2h today"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <WeeklyChart />
        </div>
        <SmartInsights />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <TodaySummary />
        <MoodTracker />
        <HabitStreaks />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GoalCompletion />
        <TipsBox />
      </div>
    </div>
  );
}
