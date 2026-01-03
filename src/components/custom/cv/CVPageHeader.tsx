import { cn } from "@/lib/utils";
import clsx from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type CVPageHeaderProps = {
  titleString?: string;
  titleNode?: ReactNode;
  subtitleString?: ReactNode;
  subtitleNode?: ReactNode;
  lightModeLogo?: CVPageHeaderLogo;
  darkModeLogo?: CVPageHeaderLogo;
  children?: ReactNode;
};

type CVPageHeaderLogo = Omit<
  ComponentPropsWithoutRef<"img">,
  "src" | "alt" | "height" | "width"
> & {
  src: string;
  alt: string;
  height: number;
  width: number;
};

export const CVPageHeader = ({
  titleString,
  titleNode,
  subtitleString,
  subtitleNode,
  children,
}: CVPageHeaderProps) => {
  return (
    <header data-slot="cv-page-header" className="flex flex-col">
      <div className="flex items-center justify-between">
        {titleString && !titleNode && (
          <h1 className="text-primary w-fit text-3xl uppercase">
            {titleString}
          </h1>
        )}
        {titleNode && !titleString && <>{titleNode}</>}
      </div>
      {subtitleString && !subtitleNode && (
        <span className="text-muted-foreground block w-fit">
          {subtitleString}
        </span>
      )}
      {subtitleNode && !subtitleString && <>{subtitleNode}</>}
      {children && <>{children}</>}
    </header>
  );
};
