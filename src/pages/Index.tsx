import FloatingOrb from "@/components/FloatingOrb";
import LoginCard from "@/components/LoginCard";

const Index = () => {
  // In production, errors would come from PHP. Empty for preview.
  const errors: string[] = [];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-4">
      {/* Animated background orbs */}
      <FloatingOrb size={300} x="10%" y="20%" delay={0} color="hsl(158 64% 32% / 0.2)" />
      <FloatingOrb size={200} x="70%" y="10%" delay={2} color="hsl(170 50% 45% / 0.15)" />
      <FloatingOrb size={250} x="80%" y="60%" delay={4} color="hsl(45 80% 60% / 0.15)" />
      <FloatingOrb size={180} x="5%" y="70%" delay={1} color="hsl(158 64% 32% / 0.12)" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(158 64% 32%) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <LoginCard errors={errors} />
    </div>
  );
};

export default Index;
