"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div className="hidden dark:block">
      <div
        className={cn(
          "transition-bg bg-background relative flex h-screen flex-col items-center justify-center",
          className,
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora":
                "repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",
              "--dark-gradient":
                "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",

              "--blue-300": "#93c5fd",
              "--blue-400": "#60a5fa",
              "--blue-500": "#3b82f6",
              "--indigo-300": "#a5b4fc",
              "--violet-200": "#ddd6fe",
              "--black": "#000",
              "--white": "#fff",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            //   I'm sorry but this is what peak developer performance looks like // trigger warning
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-2.5 [background-image:var(--mask-gradient),var(--aurora)] bg-size-[300%,200%] bg-position-[50%_50%,50%_50%] opacity-50 blur-[10px] will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--primary)_10%,var(--primary)_15%,var(--background)_20%,var(--primary)_25%,var(--background)_30%)] [--mask-gradient:repeating-linear-gradient(100deg,var(--background)_0%,var(--background)_7%,transparent_10%,transparent_12%,var(--background)_16%)] after:absolute after:inset-0 after:[background-image:var(--mask-gradient),var(--aurora)] after:bg-size-[200%,100%] after:bg-fixed after:mix-blend-difference after:content-[""]`,

              showRadialGradient &&
                `mask-[radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          ></div>
        </div>
        {children}
      </div>
    </div>
  );
};
