"use client";

import {
  CheckCircle,
  DownloadIcon,
  PrinterIcon,
  ShareIcon,
  SmileIcon,
} from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ThemeSwitcher } from "./ThemeToggle";

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

const copyLink = async (shareLink: string) => {
  if (typeof window === "undefined") {
    console.error("Could not open copy link: window is undefined");
    toast.error(
      <span className="font-mono">Error: Could not open print dialog</span>,
    );
  }

  try {
    await navigator.clipboard.writeText(shareLink);

    try {
      const clipboardContent = await navigator.clipboard.readText();

      if (clipboardContent === shareLink) {
        toast(
          <div className="flex flex-col gap-1 font-mono">
            <span className="text-primary uppercase select-all">
              {shareLink}
            </span>
            <div className="flex items-center gap-2">
              <CheckCircle className="size-4" />
              <span>Link copied to clipboard!</span>
            </div>
          </div>,
        );
      }
    } catch (error) {
      console.error("Could not copy link:", error);
      toast.error(
        <span className="font-mono">Error: Could not copy link</span>,
      );
    }
  } catch (error) {
    console.error("Could not copy link:", error);
    toast.error(<span className="font-mono">Error: Could not copy link</span>);
  }
};

const printPage = async () => {
  if (typeof window === "undefined") {
    console.error("Could not open print dialog: window is undefined");
    return await toast.error(
      <span className="font-mono">Error: Could not open print dialog</span>,
    );
  }

  try {
    await window.print();
    toast(
      <div className="flex items-center gap-2">
        <SmileIcon className="size-4" />
        <span>Thank you!</span>
      </div>,
    );
  } catch (error) {
    console.error("Could not open print dialog:", error);
    toast.error(
      <span className="font-mono">Error: Could not open print dialog</span>,
    );
  }
};

export const InteractiveCVPageHeader = ({
  lightModeLogo,
  darkModeLogo,
  lastUpdated,
  shareLink,
}: InteractiveCVPageHeaderProps) => {
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
          <div
            className="text-foreground/60 flex flex-col"
            style={{
              fontSize: "clamp(0.7rem, 0.8rem, 0.9rem)",
            }}
          >
            <span className="align-middle">Last Updated:</span>
            <time className="align-middle">{lastUpdated}</time>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant={"default"} title="Download this CV in PDF format">
            <DownloadIcon />
            <span className="hidden sm:hidden md:inline-flex">Download</span>
          </Button>
          <Button
            variant={"outline"}
            title="Click to copy the link to this page to your clipboard"
            onClick={() => {
              copyLink(shareLink);
            }}
          >
            <ShareIcon />
            <span className="hidden sm:hidden md:inline-flex">Share</span>
          </Button>
          <Button
            variant={"outline"}
            title="Print this page"
            onClick={() => {
              printPage();
            }}
          >
            <PrinterIcon />
            <span className="hidden sm:hidden md:inline-flex">Print</span>
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
      <Separator className="bg-muted border" decorative />
    </div>
  );
};
