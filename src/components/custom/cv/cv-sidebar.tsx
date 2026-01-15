import clsx from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type CVSidebarProps = ComponentPropsWithoutRef<"aside"> & {
  children?: ReactNode;
};

export const CVSidebar = ({
  children,
  className,
  ...props
}: CVSidebarProps) => {
  return (
    children && (
      <aside
        {...props}
        data-slot="cv-sidebar"
        className={clsx(
          "text-sidebar-foreground bg-sidebar border-border relative z-10 h-full w-[75mm] max-w-[75mm] min-w-[75mm] shrink-0 border-r-[0.5291666667mm] p-[4.2333333333mm] shadow-none shadow-black/50 dark:shadow-md",
          className,
        )}
      >
        {children}
      </aside>
    )
  );
};
