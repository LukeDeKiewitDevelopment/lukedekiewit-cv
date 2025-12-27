import type { ReactNode } from "react";

export type CVPageSectionProps = {
  children?: ReactNode;
  className?: string;
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
