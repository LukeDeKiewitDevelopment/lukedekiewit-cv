import type { ReactNode } from "react";

export type CVPageContentProps = {
  children?: ReactNode;
};

export const CVPageContent = ({ children }: CVPageContentProps) => {
  return (
    <div
      data-slot="cv-page-content"
      className="min-w-[135mm] overflow-x-hidden overflow-y-auto p-[4.2333333333mm]"
    >
      {children}
    </div>
  );
};
