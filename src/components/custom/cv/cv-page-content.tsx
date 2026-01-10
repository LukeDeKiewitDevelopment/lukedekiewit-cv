import clsx from "clsx";
import type { ReactNode } from "react";

export type CVPageContentProps = {
  children?: ReactNode;
  className?: string;
};

export const CVPageContent = ({ children, className }: CVPageContentProps) => {
  return (
    <div
      data-slot="cv-page-content"
      className={clsx(
        "relative min-w-[135mm] overflow-x-hidden overflow-y-auto p-[4.2333333333mm]",
        className,
      )}
    >
      {children}
    </div>
  );
};
