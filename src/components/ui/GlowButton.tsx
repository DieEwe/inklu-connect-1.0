import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const glowButtonVariants = cva(
  "glow-button appearance-none outline-none border-none relative cursor-pointer z-10 font-medium",
  {
    variants: {
      variant: {
        default: "",
        purple: "[--button-background:#000000] [--button-glow-start:#B000E8] [--button-glow-end:#009FFD] [--button-shine-left:rgba(120,0,245,0.5)] [--button-shine-right:rgba(200,148,255,0.65)]",
        blue: "[--button-background:#000000] [--button-glow-start:#00A3E8] [--button-glow-end:#00FFD1] [--button-shine-left:rgba(0,120,245,0.5)] [--button-shine-right:rgba(0,200,255,0.65)]",
        green: "[--button-background:#000000] [--button-glow-start:#76E800] [--button-glow-end:#C8FF00] [--button-shine-left:rgba(100,200,0,0.5)] [--button-shine-right:rgba(170,255,0,0.65)]",
        highlight: "[--button-background:#000000] [--button-glow-start:#ffffff] [--button-glow-end:#c0c0c0] [--button-shine-left:rgba(255,255,255,0.7)] [--button-shine-right:rgba(220,220,220,0.75)]",
        orange: "[--button-background:#000000] [--button-glow-start:#ff8a20] [--button-glow-end:#f5a250] [--button-shine-left:rgba(255,138,32,0.7)] [--button-shine-right:rgba(255,176,97,0.85)]",
        wideHighlight: "[--button-background:#000000] [--button-glow-start:#ffffff] [--button-glow-end:#c0c0c0] [--button-shine-left:rgba(255,255,255,0.7)] [--button-shine-right:rgba(220,220,220,0.75)] [--button-border-thickness:0.5px] [--button-border-radius:13px] [--animation-scale:0] [--animation-offset:0] wide-glow-button",
      },
      size: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg",
        xl: "text-xl py-4",
      },
    },
    defaultVariants: {
      variant: "purple",
      size: "default",
    },
  }
);

export interface GlowButtonProps
  extends VariantProps<typeof glowButtonVariants> {
  asChild?: boolean;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

const GlowButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  GlowButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, variant, size, asChild = false, href, children, ...props }, ref) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;
    
    // Create gradient element if it doesn't exist
    let gradientElem = button.querySelector('.gradient');
    if(!gradientElem) {
      gradientElem = document.createElement("div");
      gradientElem.classList.add("gradient");
      button.appendChild(gradientElem);
    }

    const handlePointerMove = (e: PointerEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      button.style.setProperty("--pointer-x", `${x}px`);
      button.style.setProperty("--pointer-y", `${y}px`);
      button.style.setProperty("--button-glow-opacity", "1");
    };

    const handlePointerEnter = () => {
      button.style.setProperty("--button-glow-opacity", "1");
    };

    const handlePointerLeave = () => {
      button.style.setProperty("--button-glow-opacity", "0");
    };

    // Add event listeners
    button.addEventListener("pointermove", handlePointerMove);
    button.addEventListener("pointerenter", handlePointerEnter);
    button.addEventListener("pointerleave", handlePointerLeave);

    // Clean up event listeners
    return () => {
      button.removeEventListener("pointermove", handlePointerMove);
      button.removeEventListener("pointerenter", handlePointerEnter);
      button.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  const buttonContent = (
    <span className="block px-7 py-2.5 box-border w-full rounded-[inherit] relative overflow-hidden flex items-center justify-center">
      {children}
    </span>
  );

  const sharedClassName = cn(glowButtonVariants({ variant, size, className }));

  // Helper function to handle refs
  const setRefs = (el: HTMLButtonElement | HTMLAnchorElement | null) => {
    if (!el) return;
    
    if (typeof ref === 'function') ref(el);
    else if (ref) ref.current = el;
    buttonRef.current = el;
  };

  if (asChild) {
    return (
      <Slot 
        className={sharedClassName}
        ref={setRefs as any}
        {...props}
      >
        {buttonContent}
      </Slot>
    );
  }

  if (href) {
    return (
      <a
        className={sharedClassName}
        href={href}
        ref={setRefs as any}
        {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      className={sharedClassName}
      ref={setRefs as any}
      {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}
    >
      {buttonContent}
    </button>
  );
});

GlowButton.displayName = "GlowButton";

export { GlowButton, glowButtonVariants };