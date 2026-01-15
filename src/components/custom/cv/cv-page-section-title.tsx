import clsx from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type CVPageSectionProps = ComponentPropsWithoutRef<"h3"> & {
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
      <h3
        id={id}
        data-slot="cv-page-section-title"
        className={clsx("text-10pt text-balance uppercase", className)}
      >
        {children}
      </h3>
    )
  );
};
