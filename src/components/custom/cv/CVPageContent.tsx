import type { ReactNode } from "react";

export type CVPageContentProps = {
  children?: ReactNode;
};

export const CVPageContent = ({ children }: CVPageContentProps) => {
  return (
    <div data-slot="cv-page-content" className="min-w-[140mm] p-4">
      {children}
    </div>
  );
};
