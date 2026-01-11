import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type CVPageSectionProps = ComponentPropsWithoutRef<"div"> & {
  children?: ReactNode;
};

export const CVPageSection = ({ children, className }: CVPageSectionProps) => {
  return (
    children && (
      <div data-slot="cv-page-section" className={className}>
        {children}
      </div>
    )
  );
};
