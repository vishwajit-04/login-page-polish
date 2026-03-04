import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Outlet } from "react-router-dom";
import FloatingOrb from "@/components/FloatingOrb";

export default function AppLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full relative overflow-hidden">
        {/* Background effects */}
        <div className="fixed inset-0 pointer-events-none">
          <FloatingOrb size={500} x="-10%" y="-15%" delay={0} color="hsl(158 64% 42% / 0.06)" />
          <FloatingOrb size={400} x="70%" y="10%" delay={2} color="hsl(270 60% 60% / 0.04)" />
          <FloatingOrb size={300} x="80%" y="60%" delay={4} color="hsl(210 100% 60% / 0.03)" />
          <FloatingOrb size={350} x="20%" y="70%" delay={3} color="hsl(38 92% 50% / 0.03)" />
        </div>

        <AppSidebar />

        <div className="flex-1 flex flex-col relative z-10">
          <header className="h-14 flex items-center border-b border-border/50 px-4 glass-card">
            <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
            <div className="ml-auto flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30" />
            </div>
          </header>

          <main className="flex-1 overflow-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
