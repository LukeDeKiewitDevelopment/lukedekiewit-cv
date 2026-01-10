import clsx from "clsx";
import type { ReactNode } from "react";

export type CVPageSectionProps = {
  children?: ReactNode;
  className?: string;
};

export const CVPageSectionTitle = ({
  children,
  className,
}: CVPageSectionProps) => {
  return (
    children && (
      <h3
        data-slot="cv-page-section-title"
        className={clsx("mt-[2.1166666667mm] uppercase", className)}
      >
        {children}
      </h3>
    )
  );
};
