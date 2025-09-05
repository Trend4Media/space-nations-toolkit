import { useState } from "react";
import { GamingCard, GamingCardHeader, GamingCardTitle, GamingCardContent } from "@/components/ui/gaming-card";
import { GamingButton } from "@/components/ui/gaming-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, UserPlus, Mail, Lock } from "lucide-react";

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="w-96">
      <GamingCard variant="cyber" className="animate-fade-in">
        <GamingCardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 bg-purple rounded-full animate-pulse-glow" />
            <GamingCardTitle className="text-purple">Benutzer Login</GamingCardTitle>
          </div>
          <p className="text-sm text-muted-foreground font-rajdhani">
            Zugang zu erweiterten Gaming-Tools
          </p>
        </GamingCardHeader>
        
        <GamingCardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-rajdhani font-semibold text-foreground">
                E-Mail
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary" />
                <Input
                  id="email"
                  type="email"
                  placeholder="ihre@email.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 glass-card border-border/50 focus:border-primary/50 focus:ring-primary/20 font-rajdhani"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="font-rajdhani font-semibold text-foreground">
                Passwort
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Ihr Passwort"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 glass-card border-border/50 focus:border-primary/50 focus:ring-primary/20 font-rajdhani"
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <GamingButton 
              variant="orange" 
              className="w-full"
              onClick={handleLogin}
            >
              <LogIn className="h-4 w-4" />
              Login
            </GamingButton>
            
            <div className="flex gap-2 text-xs font-rajdhani">
              <GamingButton variant="link" className="p-0 h-auto text-primary hover:text-primary-glow">
                Passwort vergessen
              </GamingButton>
              <span className="text-muted-foreground">•</span>
              <GamingButton variant="link" className="p-0 h-auto text-accent hover:text-accent-glow">
                Account anlegen
              </GamingButton>
            </div>
          </div>
        </GamingCardContent>
      </GamingCard>
    </div>
  );
};

export default LoginCard;