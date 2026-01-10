import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

export type CVSeperatorProps = React.ComponentProps<
  typeof SeparatorPrimitive.Root
>;

export const CVSeparator = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: CVSeperatorProps) => {
  return (
    <SeparatorPrimitive.Root
      data-slot="cv-separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-[0.2645833333mm] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[0.2645833333mm]",
        className,
      )}
      {...props}
    />
  );
};
