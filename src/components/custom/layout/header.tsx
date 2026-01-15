"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { EncryptedText } from "@/components/ui/encrypted-text";
import {
  CheckCircle,
  DownloadIcon,
  PrinterIcon,
  ShareIcon,
} from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import type { ComponentPropsWithoutRef } from "react";

export type HeaderProps = {
  lightModeLogo?: HeaderLogo;
  darkModeLogo?: HeaderLogo;
  lastUpdated: string;
  shareLink: string;
  pdfDownloadLink: string;
};

type HeaderLogo = ComponentPropsWithoutRef<"img">;

const copyLink = async (shareLink: string) => {
  if (typeof window === "undefined") {
    console.error("Could not open copy link: window is undefined");
    toast.error(
      <span role="alert" className="font-mono">
        Error: Could not copy link
      </span>,
    );
  }

  try {
    await navigator.clipboard.writeText(shareLink);

    try {
      const clipboardContent = await navigator.clipboard.readText();

      if (clipboardContent === shareLink) {
        toast(
          <div className="flex flex-col gap-1.5 font-mono">
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
        <span role="alert" className="font-mono">
          Error: Could not copy link
        </span>,
      );
    }
  } catch (error) {
    console.error("Could not copy link:", error);
    toast.error(
      <span role="alert" className="font-mono">
        Error: Could not copy link
      </span>,
    );
  }
};

const printPage = async () => {
  if (typeof window === "undefined") {
    console.error("Could not open print dialog: window is undefined");
  }

  try {
    window.addEventListener("afterprint", () => self.close);
    await window.print();
  } catch (error) {
    console.error("Could not open print dialog:", error);
    toast.error(
      <span role="alert" className="font-mono">
        Error: Could not open print dialog
      </span>,
    );
  } finally {
    window.removeEventListener("afterprint", () => self.close);
  }
};

export const Header = ({
  lightModeLogo,
  darkModeLogo,
  lastUpdated,
  shareLink,
  pdfDownloadLink,
}: HeaderProps) => {
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
        </div>
        <div className="flex gap-2">
          <Button
            variant={"default"}
            title="Download this CV in PDF format"
            asChild
          >
            <a
              href={pdfDownloadLink}
              rel="noopener noreferrer nofollow"
              download
            >
              <DownloadIcon />
              <span className="hidden sm:hidden md:inline-flex">Download</span>
            </a>
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
            <span className="sr-only">Print page</span>
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
      <Separator decorative />
    </nav>
  );
};
