import clsx from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type CVPageSectionProps = ComponentPropsWithoutRef<"h2"> & {
  id?: string;
  children?: ReactNode;
};

export const CVPageSectionTitle = ({
  id,
  children,
  className,
}: CVPageSectionProps) => {
  return (
    children && (
      <h2
        id={id}
        data-slot="cv-page-section-title"
        className={clsx("text-9pt text-balance uppercase", className)}
      >
        {children}
      </h2>
    )
  );
};
