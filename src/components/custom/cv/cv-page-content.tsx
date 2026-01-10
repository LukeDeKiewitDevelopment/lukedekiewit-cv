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
    <div
      {...props}
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
