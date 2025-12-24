"use client";

import { LaptopIcon, MoonIcon, PaintbrushIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

type Themes = "theme-light" | "dark" | "system";

export const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState<Themes>("theme-light");

  const switchTheme = (theme: Themes) => {
    setCurrentTheme(theme);
    if (theme === currentTheme) {
      return;
    }
    switch (theme) {
      case "theme-light":
        toast(
          <div>
            <div className="flex items-center gap-2">
              <PaintbrushIcon className="text-primary size-4" />
              <span>Theme: Light</span>
            </div>
          </div>,
        );
        break;

      case "dark":
        toast(
          <div>
            <div className="flex items-center gap-2">
              <PaintbrushIcon className="text-primary size-4" />
              <span>Theme: Dark</span>
            </div>
          </div>,
        );
        break;

      case "system":
        toast(
          <div>
            <div className="flex items-center gap-2">
              <PaintbrushIcon className="text-primary size-4" />
              <span>Theme: System</span>
            </div>
          </div>,
        );
        break;
    }
  };

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setCurrentTheme(isDarkMode ? "dark" : "theme-light");
  }, []);

  useEffect(() => {
    const isDark =
      currentTheme === "dark" ||
      (currentTheme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [currentTheme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          title="Click to choose a different theme"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="cursor-pointer text-sm"
          onClick={() => switchTheme("theme-light")}
          title="Light theme"
        >
          <SunIcon className="text-primary" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer text-sm"
          onClick={() => switchTheme("dark")}
          title="Dark theme"
        >
          <MoonIcon className="text-primary" /> <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer text-sm"
          onClick={() => switchTheme("system")}
          title="System theme"
        >
          <LaptopIcon className="text-primary" /> <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
