import type { ReactNode } from "react";

export type CVSidebarProps = {
  children?: ReactNode;
};

export const CVSidebar = ({ children }: CVSidebarProps) => {
  return (
    children && (
      <aside
        data-slot="cv-sidebar"
        className="text-sidebar-foreground border-border sticky h-full w-[70mm] border-r-[0.5291666667mm] p-[4.2333333333mm] shadow-sm"
      >
        {children}
      </aside>
    )
  );
};
