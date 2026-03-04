import { motion } from "framer-motion";
import { Bot, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const suggestions = [
  "How can I reduce my stress?",
  "Optimize my study schedule",
  "I can't focus after 9 PM",
  "Create a weekly wellness plan",
];

type Message = { role: "user" | "assistant"; content: string };

const mockMessages: Message[] = [
  {
    role: "assistant",
    content: "👋 Hi Alex! I've been analyzing your data. Your stress levels have been creeping up over the past 3 days, and your focus drops significantly after 9 PM. Would you like me to create an optimized schedule?",
  },
];

export default function AICoach() {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant" as const,
          content: "Based on your patterns, I recommend: 1) Deep work sessions between 6-9 AM when your focus peaks, 2) 10-minute meditation breaks every 90 minutes, 3) Screen-free time after 9 PM. Shall I set these up as recurring reminders?",
        },
      ]);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col h-[calc(100vh-8rem)]">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
        <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
          <Bot className="w-6 h-6 text-primary" /> AI Wellness Coach
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Your personal AI-powered wellness advisor</p>
      </motion.div>

      <div className="flex-1 overflow-auto space-y-4 mb-4">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "glass-card text-foreground"
              }`}
            >
              {msg.role === "assistant" && (
                <Sparkles className="w-3.5 h-3.5 text-primary mb-1.5" />
              )}
              {msg.content}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => setInput(s)}
            className="text-xs px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
          >
            {s}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask your AI coach anything..."
          className="bg-muted border-border/50"
        />
        <Button onClick={handleSend} size="icon">
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
