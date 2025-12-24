import { cn } from "@/lib/utils";

export const LayoutGridBackground = () => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-0 size-full min-h-screen min-w-screen bg-cover",
        "bg-size-[50px_50px]",
        "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
        "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
      )}
    />
  );
};
