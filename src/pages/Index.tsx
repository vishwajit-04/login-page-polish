import { motion } from "framer-motion";
import FloatingOrb from "@/components/FloatingOrb";
import LoginCard from "@/components/LoginCard";

const Index = () => {
  const errors: string[] = [];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      style={{
        background: "linear-gradient(135deg, hsl(158 40% 12%) 0%, hsl(200 30% 8%) 40%, hsl(260 25% 12%) 70%, hsl(320 20% 10%) 100%)",
      }}
    >
      {/* Animated mesh blobs */}
      <FloatingOrb size={400} x="-5%" y="-10%" delay={0} color="hsl(158 64% 40% / 0.18)" />
      <FloatingOrb size={350} x="60%" y="5%" delay={1.5} color="hsl(260 50% 50% / 0.12)" />
      <FloatingOrb size={300} x="75%" y="55%" delay={3} color="hsl(320 40% 45% / 0.1)" />
      <FloatingOrb size={250} x="15%" y="65%" delay={2} color="hsl(200 50% 40% / 0.12)" />
      <FloatingOrb size={180} x="45%" y="80%" delay={4} color="hsl(45 70% 55% / 0.08)" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial spotlight */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(158 64% 40% / 0.08) 0%, transparent 70%)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <LoginCard errors={errors} />
    </div>
  );
};

export default Index;
