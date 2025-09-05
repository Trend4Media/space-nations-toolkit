import { GamingCard } from "@/components/ui/gaming-card";
import { GamingButton } from "@/components/ui/gaming-button";
import { Calculator, Target, Zap, Shield, Users, BarChart3 } from "lucide-react";

const toolItems = [
  { icon: Calculator, label: "AS-Counter", description: "Angriff & Sabotage Counter" },
  { icon: Zap, label: "Sabo-Counter", description: "Sabotage Aktivitäten" },
  { icon: Target, label: "Raid-Counter", description: "Raid Planungen" },
  { icon: Shield, label: "Defense-Tools", description: "Verteidigungstools" },
  { icon: Users, label: "Allianz-Tools", description: "Allianz Management" },
  { icon: BarChart3, label: "Statistiken", description: "Erweiterte Analysen" }
];

const Navigation = () => {
  return (
    <div className="w-80 p-6 space-y-4">
      <GamingCard variant="cyber" className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
          <h2 className="font-orbitron text-lg font-bold text-glow">Counter Tools</h2>
        </div>
        
        <div className="space-y-2">
          {toolItems.map((item, index) => (
            <div key={index} className="group">
              <GamingButton
                variant="glass"
                className="w-full justify-start h-12 group-hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-300"
              >
                <item.icon className="h-4 w-4 text-primary group-hover:text-primary-glow" />
                <div className="flex flex-col items-start">
                  <span className="font-rajdhani font-semibold">{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.description}</span>
                </div>
              </GamingButton>
            </div>
          ))}
        </div>
      </GamingCard>
      
      <GamingCard variant="glass" className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
          <h2 className="font-orbitron text-lg font-bold text-glow">Quick Actions</h2>
        </div>
        
        <div className="space-y-3">
          <GamingButton variant="orange" className="w-full">
            <Shield className="h-4 w-4" />
            Admin Login
          </GamingButton>
          <GamingButton variant="outline" className="w-full">
            <Users className="h-4 w-4" />
            Allianz Registrieren
          </GamingButton>
        </div>
      </GamingCard>
    </div>
  );
};

export default Navigation;