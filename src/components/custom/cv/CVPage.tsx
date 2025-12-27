import type { ReactNode } from "react";

export type CVPageProps = {
  children?: ReactNode;
  pageNumber?: number;
};

export const CVPage = ({ children, pageNumber }: CVPageProps) => {
  return (
    <section
      data-slot="cv-page"
      className="border-border h-[297mm] max-h-[297mm] min-h-[297mm] w-full max-w-[210mm] min-w-[210mm] overflow-hidden rounded-sm border-2 shadow-md print:rounded-none print:border-none print:shadow-none flex"
    >
      {children}
    </section>
  );
};
