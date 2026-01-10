import clsx from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type CVPageProps = ComponentPropsWithoutRef<"section"> & {
  children?: ReactNode;
  pageNumber?: number;
};

export const CVPage = ({
  children,
  pageNumber,
  className,
  ...props
}: CVPageProps) => {
  return (
    <section
      {...props}
      data-slot="cv-page"
      data-page-number={pageNumber}
      className={clsx(
        "border-border flex h-[297mm] max-h-[297mm] min-h-[297mm] w-full max-w-[210mm] min-w-[210mm] overflow-hidden rounded-sm border-2 shadow-md print:rounded-none print:border-none print:shadow-none",
        className,
      )}
    >
      {children}
    </section>
  );
};
