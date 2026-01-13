import clsx from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type CVPageSectionProps = ComponentPropsWithoutRef<"h3"> & {
  children?: ReactNode;
};

export const CVPageSectionTitle = ({
  children,
  className,
}: CVPageSectionProps) => {
  return (
    children && (
      <h3
        data-slot="cv-page-section-title"
        className={clsx("text-sm mt-[2.1166666667mm] uppercase", className)}
      >
        {children}
      </h3>
    )
  );
};
