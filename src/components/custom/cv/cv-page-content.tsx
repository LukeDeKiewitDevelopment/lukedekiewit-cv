import clsx from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type CVPageContentProps = ComponentPropsWithoutRef<"div"> & {
  children?: ReactNode;
};

export const CVPageContent = ({
  children,
  className,
  ...props
}: CVPageContentProps) => {
  return (
    <div className="bg-card text-card-foreground w-[135mm] max-w-[135mm] min-w-[135mm]">
      <div
        {...props}
        data-slot="cv-page-content"
        className={clsx("relative z-2 size-full p-[4.2333333333mm]", className)}
      >
        {children}
      </div>
    </div>
  );
};
