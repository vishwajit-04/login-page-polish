import { motion } from "framer-motion";
import { Users, Activity, Database, Shield } from "lucide-react";

const stats = [
  { icon: Users, label: "Total Users", value: "1,248", color: "hsl(158, 64%, 42%)" },
  { icon: Activity, label: "Active Today", value: "342", color: "hsl(210, 100%, 60%)" },
  { icon: Database, label: "Data Points", value: "45.2K", color: "hsl(270, 60%, 60%)" },
  { icon: Shield, label: "System Health", value: "99.8%", color: "hsl(38, 92%, 50%)" },
];

const recentUsers = [
  { name: "Sarah M.", email: "sarah@email.com", status: "Active", score: 82 },
  { name: "James K.", email: "james@email.com", status: "Active", score: 75 },
  { name: "Maya P.", email: "maya@email.com", status: "Inactive", score: 45 },
  { name: "Tom W.", email: "tom@email.com", status: "Active", score: 91 },
];

export default function AdminPanel() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-display font-bold text-foreground">Admin Panel</h1>
        <p className="text-sm text-muted-foreground mt-1">System overview and user management</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
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
            <p className="text-2xl font-display font-bold text-foreground mt-1">{s.value}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card rounded-2xl p-5"
      >
        <h3 className="font-display font-semibold text-foreground mb-4">Recent Users</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/30">
                <th className="text-left text-xs text-muted-foreground font-medium py-2">Name</th>
                <th className="text-left text-xs text-muted-foreground font-medium py-2">Email</th>
                <th className="text-left text-xs text-muted-foreground font-medium py-2">Status</th>
                <th className="text-left text-xs text-muted-foreground font-medium py-2">Wellness Score</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((u) => (
                <tr key={u.email} className="border-b border-border/20 last:border-0">
                  <td className="py-3 text-sm text-foreground">{u.name}</td>
                  <td className="py-3 text-sm text-muted-foreground">{u.email}</td>
                  <td className="py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      u.status === "Active" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    }`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="py-3 text-sm font-medium text-foreground">{u.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
