"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { type ComponentPropsWithoutRef } from "react";
import { ThemeSwitcher } from "../theme-switcher";

export type EcomTimelineHeaderProps = {
  lightModeLogo?: EcomTimelineHeaderLogo;
  darkModeLogo?: EcomTimelineHeaderLogo;
};

type EcomTimelineHeaderLogo = ComponentPropsWithoutRef<"img">;

export const EcomTimelineHeader = ({
  lightModeLogo,
  darkModeLogo,
}: EcomTimelineHeaderProps) => {
  return (
    <nav
      data-slot="header"
      className="bg-card flex min-w-screen flex-col shadow-md print:hidden!"
    >
      <div className="flex items-center justify-between gap-4 p-4 md:p-6 lg:p-8">
        {lightModeLogo && (
          <Avatar className="border-primary hidden-in-darkmode hidden border-2 p-0.75 shadow-black select-none sm:hidden md:flex md:size-10">
            <AvatarImage
              className="animate-in zoom-in fade-in blur-in duration-200"
              {...lightModeLogo}
              src={lightModeLogo.src}
              alt={lightModeLogo.alt}
              height={lightModeLogo.height}
              width={lightModeLogo.width}
            />
          </Avatar>
        )}
        {darkModeLogo && (
          <Avatar className="border-primary hidden-in-lightmode hidden border-2 p-0.75 shadow-black select-none sm:hidden md:flex md:size-10">
            <AvatarImage
              className="animate-in zoom-in fade-in blur-in duration-200"
              {...darkModeLogo}
              src={darkModeLogo.src}
              alt={darkModeLogo.alt}
              height={darkModeLogo.height}
              width={darkModeLogo.width}
            />
          </Avatar>
        )}
        <ThemeSwitcher />
      </div>
      <Separator decorative />
    </nav>
  );
};
