import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const gamingButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-rajdhani font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-glow hover:shadow-cyber border border-primary/30 hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow hover:bg-destructive/90",
        outline: "border border-primary/30 bg-transparent text-primary shadow-sm hover:bg-primary/10 hover:shadow-glow cyber-border",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "text-primary hover:bg-primary/10 hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        cyber: "bg-gradient-cyber text-white shadow-glow hover:shadow-cyber border border-primary/50 animate-pulse-glow",
        accent: "bg-gradient-accent text-accent-foreground shadow-accent-glow hover:shadow-cyber border border-accent/30",
        orange: "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-orange-500/25 font-bold",
        purple: "bg-gradient-purple text-purple-foreground shadow-purple-glow hover:shadow-purple-glow border border-purple/30 font-bold",
        cosmic: "bg-gradient-cosmic text-white shadow-purple-glow hover:shadow-glow border border-purple/50 animate-pulse-glow",
        glass: "glass-card text-foreground hover:bg-card/90 border border-border/50"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-12 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface GamingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gamingButtonVariants> {
  asChild?: boolean;
}

const GamingButton = React.forwardRef<HTMLButtonElement, GamingButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(gamingButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {variant === 'cyber' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        )}
        {children}
      </Comp>
    );
  }
);
GamingButton.displayName = "GamingButton";

export { GamingButton, gamingButtonVariants };