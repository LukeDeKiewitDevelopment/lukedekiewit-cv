import type { ReactNode } from "react";

export type CVPageSectionProps = {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
};

export const CVPageSection = ({
  title,
  subtitle,
  children,
}: CVPageSectionProps) => {
  return <article data-slot="cv-page-section"></article>;
};
