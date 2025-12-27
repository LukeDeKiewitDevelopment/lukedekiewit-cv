import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@lib/utils";

export type CVAvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root>;

export const CVAvatar = ({ className, ...props }: CVAvatarProps) => {
  return (
    <AvatarPrimitive.Root
      data-slot="cv-avatar"
      className={cn(
        "relative flex size-[33.866666667mm] shrink-0 overflow-hidden rounded-[calc(infinity*0.2645833333mm)]",
        className,
      )}
      {...props}
    />
  );
};

export type CVAvatarImageProps = React.ComponentProps<
  typeof AvatarPrimitive.Image
>;

export const CVAvatarImage = ({ className, ...props }: CVAvatarImageProps) => {
  return (
    <AvatarPrimitive.Image
      data-slot="cv-avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
};

export type CVAvatarFallbackProps = React.ComponentProps<
  typeof AvatarPrimitive.Fallback
>;

export const CVAvatarFallback = ({
  className,
  ...props
}: CVAvatarFallbackProps) => {
  return (
    <AvatarPrimitive.Fallback
      data-slot="cv-avatar-fallback"
      className={cn(
        "bg-primary text-primary-foreground flex size-full items-center justify-center rounded-[calc(infinity*0.2645833333mm)]",
        className,
      )}
      {...props}
    />
  );
};
