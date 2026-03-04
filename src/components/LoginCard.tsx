import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface LoginCardProps {
  errors: string[];
}

const LoginCard = ({ errors }: LoginCardProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-md"
    >
      <div
        className="relative rounded-2xl p-8 md:p-10 backdrop-blur-xl border"
        style={{
          background: "var(--glass-bg)",
          borderColor: "var(--glass-border)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        {/* Title */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-foreground tracking-tight">
            Admin Login
          </h3>
          <p className="text-muted-foreground text-sm mt-1.5">
            Welcome back to your wellness dashboard
          </p>
        </motion.div>

        {/* Errors */}
        {errors.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-4 px-4 py-3 rounded-xl bg-destructive/10 text-destructive text-sm border border-destructive/20"
          >
            {e}
          </motion.div>
        ))}

        {/* Form */}
        <form method="post" action="login.php" className="space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Label className="text-sm font-medium text-foreground mb-2 block">
              Email
            </Label>
            <div className="relative">
              <Mail
                className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
                  focused === "email" ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <Input
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className="pl-10 h-12 rounded-xl border-border bg-background/50 transition-all duration-300 focus:bg-background focus:shadow-[var(--shadow-glow)]"
                placeholder="admin@wellness.com"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Label className="text-sm font-medium text-foreground mb-2 block">
              Password
            </Label>
            <div className="relative">
              <Lock
                className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
                  focused === "password" ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <Input
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocused("password")}
                onBlur={() => setFocused(null)}
                className="pl-10 h-12 rounded-xl border-border bg-background/50 transition-all duration-300 focus:bg-background focus:shadow-[var(--shadow-glow)]"
                placeholder="••••••••"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-2"
          >
            <Button
              type="submit"
              className="w-full h-12 rounded-xl text-base font-medium group relative overflow-hidden"
              style={{ background: "var(--wellness-gradient)" }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-primary-foreground">
                Login
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </motion.div>
        </form>

        {/* User login link */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <a
            href="/wellness-app/index.php"
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 underline-offset-4 hover:underline"
          >
            User Login →
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoginCard;
