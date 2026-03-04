import { motion } from "framer-motion";

interface FloatingOrbProps {
  size: number;
  x: string;
  y: string;
  delay: number;
  color: string;
}

const FloatingOrb = ({ size, x, y, delay, color }: FloatingOrbProps) => (
  <motion.div
    className="absolute rounded-full blur-3xl opacity-30"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: color,
    }}
    animate={{
      y: [0, -20, 0],
      scale: [1, 1.08, 1],
      opacity: [0.25, 0.45, 0.25],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

export default FloatingOrb;
