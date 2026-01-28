"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { type ComponentPropsWithoutRef } from "react";

import { EncryptedText } from "@/components/ui/encrypted-text";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import { copyLink } from "@/components/custom/layout/header";
import { ThemeSwitcher } from "@/components/custom/layout/theme-switcher";

export type ShowcaseHeaderProps = {
  lightModeLogo?: ShowcaseHeaderLogo;
  darkModeLogo?: ShowcaseHeaderLogo;
  lastUpdated?: string;
  shareLink?: string;
};

type ShowcaseHeaderLogo = ComponentPropsWithoutRef<"img">;

export const ShowcaseHeader = ({
  lightModeLogo,
  darkModeLogo,
  lastUpdated,
  shareLink,
}: ShowcaseHeaderProps) => {
  return (
    <nav
      data-slot="header"
      className="bg-card flex min-w-screen flex-col shadow-md print:hidden!"
    >
      <div className="flex items-center justify-between gap-4 p-4 md:p-6 lg:p-8">
        <div className="flex items-center gap-2">
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
          {lastUpdated && (
            <div
              className="flex flex-col"
              style={{
                fontSize: "clamp(0.7rem, 0.8rem, 0.9rem)",
              }}
            >
              <span className="text-muted-foreground">Last Updated:</span>
              <time>
                <EncryptedText
                  text={lastUpdated}
                  encryptedClassName="text-muted-foreground/60"
                  revealedClassName="text-muted-foreground/60"
                  revealDelayMs={0}
                />
              </time>
              <time className="text-muted-foreground/60 hidden motion-reduce:inline">
                {lastUpdated}
              </time>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={"outline"}
            title="Click to copy the link to this page to your clipboard"
            onClick={() => {
              copyLink(shareLink);
            }}
          >
            <CopyIcon />
            <span className="sr-only">Copy link</span>
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
      <Separator decorative />
    </nav>
  );
};
