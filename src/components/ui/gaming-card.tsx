import * as React from "react";
import { cn } from "@/lib/utils";

const GamingCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: 'default' | 'glass' | 'cyber' }
>(({ className, variant = 'default', ...props }, ref) => {
  const variants = {
    default: "glass-card text-card-foreground",
    glass: "glass-card text-card-foreground hover:bg-card/90 transition-all duration-300",
    cyber: "glass-card text-card-foreground cyber-border hover:shadow-glow transition-all duration-300"
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg shadow-lg",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
GamingCard.displayName = "GamingCard";

const GamingCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
GamingCardHeader.displayName = "GamingCardHeader";

const GamingCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-orbitron text-2xl font-semibold leading-none tracking-tight text-glow", className)}
    {...props}
  />
));
GamingCardTitle.displayName = "GamingCardTitle";

const GamingCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground font-rajdhani", className)}
    {...props}
  />
));
GamingCardDescription.displayName = "GamingCardDescription";

const GamingCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
GamingCardContent.displayName = "GamingCardContent";

const GamingCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
GamingCardFooter.displayName = "GamingCardFooter";

export { GamingCard, GamingCardHeader, GamingCardFooter, GamingCardTitle, GamingCardDescription, GamingCardContent };