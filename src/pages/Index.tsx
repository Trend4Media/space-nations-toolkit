import SpaceBackground from "@/components/SpaceBackground";
import Navigation from "@/components/Navigation";
import LoginCard from "@/components/LoginCard";
import { GamingCard, GamingCardHeader, GamingCardTitle, GamingCardContent, GamingCardDescription } from "@/components/ui/gaming-card";
import { GamingButton } from "@/components/ui/gaming-button";
import { Zap, Shield, Smartphone, Users, Crown, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Schnell & Effizient",
    description: "Alle Tools sind optimiert für maximale Performance und Gaming-Präzision"
  },
  {
    icon: Shield,
    title: "Sicher & Privat",
    description: "Ihre Gaming-Daten bleiben sicher und privat in unserem verschlüsselten System"
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Funktioniert perfekt auf allen Geräten - Desktop, Tablet und Mobile"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen relative font-rajdhani">
      <SpaceBackground />
      
      {/* Header */}
      <header className="relative z-10 p-6 border-b border-border/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/src/assets/spacenations-logo.png" 
              alt="Spacenations Logo" 
              className="h-10 animate-float"
            />
            <div className="flex flex-col">
              <h1 className="font-orbitron text-2xl font-bold text-glow">
                TOOLS
              </h1>
              <span className="font-rajdhani text-xs text-muted-foreground">Info-Tool Collection</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <GamingButton variant="orange" className="animate-float">
              Jetzt Spielen
            </GamingButton>
            <GamingButton variant="outline" className="animate-float">
              <Crown className="h-4 w-4" />
              Light Mode
            </GamingButton>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[calc(100vh-120px)]">
          
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1 animate-slide-in-right">
            <Navigation />
          </div>
          
          {/* Content Area */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in">
            
            {/* Welcome Section */}
            <GamingCard variant="glass" className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <img 
                  src="/src/assets/spacenations-logo.png" 
                  alt="Spacenations Logo" 
                  className="h-24 animate-float"
                />
              </div>
              <h2 className="font-orbitron text-4xl font-bold mb-4 text-glow">
                SPACENATIONS TOOLS
              </h2>
              <p className="text-xl text-muted-foreground mb-6 font-rajdhani">
                Erobere die Sterne, beherrsche das Universum!
              </p>
              
              <div className="inline-block p-6 glass-card border border-accent/30 rounded-lg mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Crown className="h-6 w-6 text-accent animate-pulse-glow" />
                  <h3 className="font-orbitron text-xl font-bold text-accent text-glow">
                    Allianz-Administration
                  </h3>
                </div>
                <p className="text-foreground mb-4 font-rajdhani">
                  Registrieren Sie Ihre Allianz als Administrator und erhalten Sie Zugang zu erweiterten Analyse-Tools und Statistiken.
                </p>
                <GamingButton variant="orange" className="animate-pulse-glow">
                  <Users className="h-4 w-4" />
                  Allianz Anmelden
                </GamingButton>
              </div>
              
              <p className="text-muted-foreground font-rajdhani">
                Nutzen Sie unsere professionellen Counter-Tools für eine bessere Übersicht über Ihre Spacenations-Aktivitäten. 
                Wählen Sie links ein Tool aus oder loggen Sie sich ein, um erweiterte Funktionen zu nutzen.
              </p>
            </GamingCard>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <GamingCard 
                  key={index} 
                  variant="cyber" 
                  className="p-6 text-center hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-purple/10 border border-purple/30">
                      <feature.icon className="h-6 w-6 text-purple animate-pulse-glow" />
                    </div>
                  </div>
                  <h3 className="font-orbitron font-bold mb-2 text-glow">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground font-rajdhani">{feature.description}</p>
                </GamingCard>
              ))}
            </div>
          </div>
          
          {/* Login Sidebar */}
          <div className="lg:col-span-1 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <LoginCard />
            
            {/* Dashboard Preview */}
            <GamingCard variant="glass" className="mt-6 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
                <h3 className="font-orbitron font-bold text-glow">Willkommen!</h3>
              </div>
              <div className="space-y-3">
                <GamingButton variant="outline" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4" />
                  Dashboard
                </GamingButton>
                <GamingButton variant="ghost" className="w-full justify-start text-muted-foreground">
                  Logout
                </GamingButton>
              </div>
            </GamingCard>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-border/30 mt-12">
        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-orbitron font-bold text-purple mb-2">Rechtliches</h4>
              <div className="space-y-1 font-rajdhani">
                <div className="text-muted-foreground hover:text-purple cursor-pointer">Impressum</div>
                <div className="text-muted-foreground hover:text-purple cursor-pointer">Datenschutzerklärung</div>
                <div className="text-muted-foreground hover:text-purple cursor-pointer">AGB & Nutzungsbedingungen</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-orbitron font-bold text-accent mb-2">Tools & Navigation</h4>
              <div className="space-y-1 font-rajdhani">
                <div className="text-muted-foreground hover:text-accent cursor-pointer">Startseite</div>
                <div className="text-muted-foreground hover:text-accent cursor-pointer">AS-Counter</div>
                <div className="text-muted-foreground hover:text-accent cursor-pointer">Raid-Counter</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-orbitron font-bold text-purple mb-2">Administration</h4>
              <div className="space-y-1 font-rajdhani">
                <GamingButton variant="purple" className="p-0 h-auto text-xs">
                  Admin-Login
                </GamingButton>
                <div className="text-muted-foreground hover:text-purple cursor-pointer">Hilfe & FAQ</div>
                <div className="text-muted-foreground hover:text-purple cursor-pointer">Changelog</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
