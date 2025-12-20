"use client";

import { CheckCircle, Download, Share } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Toaster } from "../ui/sonner";
import { ThemeToggle } from "./ThemeToggle";

interface InteractiveCVPageHeaderProps {
  lightModeLogo?: InteractiveCVPageHeaderLogo;
  darkModeLogo?: InteractiveCVPageHeaderLogo;
  lastUpdated: string;
  shareLink: string;
}

interface InteractiveCVPageHeaderLogo {
  src: string;
  alt: string;
}

export const InteractiveCVPageHeader = ({
  lightModeLogo,
  darkModeLogo,
  lastUpdated,
  shareLink,
}: InteractiveCVPageHeaderProps) => {
  const copyLink = () => {
    navigator.clipboard.writeText(shareLink);
    toast(
      <div className="flex flex-col gap-1">
        <span className="text-primary uppercase select-all">{shareLink}</span>
        <div className="flex items-center gap-2">
          <CheckCircle className="size-4" />
          <span>Link copied to clipboard!</span>
        </div>
      </div>,
    );
  };

  return (
    <div className="bg-card flex flex-col print:hidden">
      <div className="flex items-center justify-between gap-4 p-4 sm:p-4 md:flex-row md:p-6 lg:flex-row lg:p-8">
        <div className="flex items-center gap-2">
          {lightModeLogo && (
            <Avatar className="border-primary hidden-in-dark-mode pointer-events-none hidden border-2 p-0.75 shadow-black select-none sm:hidden md:flex md:size-10">
              <AvatarImage src={lightModeLogo.src} alt={lightModeLogo.alt} />
            </Avatar>
          )}
          {darkModeLogo && (
            <Avatar className="border-primary hidden-in-lightmode pointer-events-none hidden border-2 p-0.75 shadow-black select-none sm:hidden md:flex md:size-10">
              <AvatarImage src={darkModeLogo.src} alt={darkModeLogo.alt} />
            </Avatar>
          )}
          <div className="text-foreground/60 flex flex-col text-sm">
            <span className="align-middle">Last Updated:</span>
            <time className="align-middle">{lastUpdated}</time>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant={"default"}
            aria-label="Download CV"
            title="Click to download CV"
          >
            <Download />
            <span className="hidden sm:hidden md:inline-flex">Download</span>
          </Button>
          <Button
            variant={"outline"}
            aria-label="Share this page (copy link)"
            title="Click to copy the link to this page to your clipboard"
            onClick={() => {
              copyLink();
            }}
          >
            <Share />
            <span className="hidden sm:hidden md:inline-flex">Share</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>
      <Separator className="bg-muted border" decorative />
      <Toaster position="bottom-center" />
    </div>
  );
};
