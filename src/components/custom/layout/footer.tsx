"use client";

import clsx from "clsx";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";

export type FooterProps = ComponentPropsWithoutRef<"footer">;

export const Footer = ({ className, ...props }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      {...props}
      data-slot="footer"
      className={clsx(
        "flex items-center justify-center p-4 md:p-6 lg:p-8 print:hidden",
        className,
      )}
    >
      <span className="text-muted-foreground w-fit text-center align-middle text-[7pt]">
        <i className="not-italic">&copy;</i>&nbsp;
        <time dateTime={String(currentYear)}>{currentYear}</time>&nbsp;
        {`Luke De Kiewit. Built using `}
        <a
          className="hover:text-primary underline transition-colors"
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://astro.build/"
        >
          Astro
        </a>
        {", "}
        <a
          className="hover:text-primary underline transition-colors"
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://react.dev/"
        >
          React
        </a>
        {", "}
        <a
          className="hover:text-primary underline transition-colors"
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://tailwindcss.com/"
        >
          Tailwind CSS
        </a>
        {" and "}
        <a
          className="hover:text-primary underline transition-colors"
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://ui.shadcn.com/"
        >
          shadcn/ui
        </a>
        {"."}
      </span>
    </footer>
  );
};
