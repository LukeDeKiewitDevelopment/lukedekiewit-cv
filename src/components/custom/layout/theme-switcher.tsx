"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

export type Themes = "theme-light" | "dark" | "system";

export const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState<Themes>("theme-light");

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
    <DropdownMenu data-slot="theme-switcher">
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          title="Click to choose a different theme"
          className="relative"
        >
          <SunIcon className="size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <MoonIcon className="absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="cursor-pointer text-sm"
          onClick={() => setCurrentTheme("theme-light")}
          title="Light theme"
        >
          <SunIcon className="text-primary" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer text-sm"
          onClick={() => setCurrentTheme("dark")}
          title="Dark theme"
        >
          <MoonIcon className="text-primary" /> <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer text-sm"
          onClick={() => setCurrentTheme("system")}
          title="System theme"
        >
          <LaptopIcon className="text-primary" /> <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
