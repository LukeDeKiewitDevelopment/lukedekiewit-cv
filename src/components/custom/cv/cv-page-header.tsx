import clsx from "clsx";
import type { ReactNode } from "react";

export type CVPageHeaderProps = {
  titleString?: string;
  titleNode?: ReactNode;
  subtitleString?: ReactNode;
  subtitleNode?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export const CVPageHeader = ({
  titleString,
  titleNode,
  subtitleString,
  subtitleNode,
  children,
  className,
}: CVPageHeaderProps) => {
  return (
    <header
      data-slot="cv-page-header"
      className={clsx("flex flex-col", className)}
    >
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
