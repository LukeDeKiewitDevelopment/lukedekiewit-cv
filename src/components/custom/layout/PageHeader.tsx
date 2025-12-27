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
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import type { ComponentPropsWithoutRef } from "react";

export type PageHeaderProps = {
  lightModeLogo?: PageHeaderLogo;
  darkModeLogo?: PageHeaderLogo;
  lastUpdated: string;
  shareLink: string;
  pdfDownloadLink: string;
};

type PageHeaderLogo = Omit<
  ComponentPropsWithoutRef<"img">,
  "src" | "alt" | "height" | "width"
> & {
  src: string;
  alt: string;
  height: number;
  width: number;
};

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
  }

  try {
    await window.print();
  } catch (error) {
    console.error("Could not open print dialog:", error);
    toast.error(
      <span className="font-mono">Error: Could not open print dialog</span>,
    );
  }
};

export const PageHeader = ({
  lightModeLogo,
  darkModeLogo,
  lastUpdated,
  shareLink,
  pdfDownloadLink,
}: PageHeaderProps) => {
  return (
    <nav
      data-slot="page-header"
      className="bg-card relative z-50 flex flex-col overflow-hidden shadow-md print:hidden"
    >
      <div className="flex items-center justify-between gap-4 p-4 sm:p-4 md:flex-row md:p-6 lg:flex-row lg:p-8">
        <div className="flex items-center gap-2">
          {lightModeLogo && (
            <Avatar className="border-primary hidden-in-darkmode hidden border-2 p-0.75 shadow-black select-none sm:hidden md:flex md:size-10">
              <AvatarImage
                className="animate-in zoom-in duration-200"
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
                className="animate-in zoom-in duration-200"
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
            <span className="text-foreground/60">Last Updated:</span>
            <time>
              <EncryptedText
                text={lastUpdated}
                encryptedClassName="text-foreground/40"
                revealedClassName="text-foreground/60"
                revealDelayMs={0}
              />
            </time>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant={"default"}
            title="Download this CV in PDF format"
            asChild
          >
            <a href={pdfDownloadLink} download>
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
