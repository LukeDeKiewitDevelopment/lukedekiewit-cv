"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { EncryptedText } from "@/components/ui/encrypted-text";
import {
  ClipboardCheck,
  DownloadIcon,
  PrinterIcon,
  CopyIcon,
  ArrowLeftIcon,
} from "lucide-react";
import { ThemeSwitcher, type Themes } from "./theme-switcher";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { type ComponentPropsWithoutRef } from "react";

export type HeaderProps = {
  lightModeLogo?: HeaderLogo;
  darkModeLogo?: HeaderLogo;
  lastUpdated?: string;
  shareLink?: string;
  pdfDownloadLink?: string;
  hideDownloadButton?: boolean;
  hidePrintButton?: boolean;
  hideProjectsButton?: boolean;
  showBackToCvButton?: boolean;
};

type HeaderLogo = ComponentPropsWithoutRef<"img">;

export const copyLink = async (shareLink?: string) => {
  if (!shareLink) {
    return;
  }

  try {
    await navigator.clipboard.writeText(shareLink);
    try {
      const clipboardContent = await navigator.clipboard.readText();

      if (clipboardContent === shareLink) {
        toast(
          <div className="flex items-center gap-1.5 font-mono">
            <ClipboardCheck className="size-4" />
            <span>Link copied to clipboard</span>
          </div>,
        );
      }
    } catch (error) {
      console.error("Could not copy link:", error);
      toast.error(
        <span role="alert" className="text-destructive font-mono">
          {`Error: ${error}`}
        </span>,
      );
    }
  } catch (error) {
    console.error("Could not copy link:", error);
    toast.error(
      <span role="alert" className="text-destructive font-mono">
        {`Error: ${error}`}
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
      <span role="alert" className="text-destructive font-mono">
        {`Error: ${error}`}
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
  hideDownloadButton,
  hidePrintButton,
  hideProjectsButton,
  showBackToCvButton,
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
                src={lightModeLogo.src}
                alt={lightModeLogo.alt}
                height={lightModeLogo.height}
                width={lightModeLogo.width}
                loading="eager"
                {...lightModeLogo}
              />
            </Avatar>
          )}
          {darkModeLogo && (
            <Avatar className="border-primary hidden-in-lightmode hidden border-2 p-0.75 shadow-black select-none sm:hidden md:flex md:size-10">
              <AvatarImage
                className="animate-in zoom-in fade-in blur-in duration-200"
                src={darkModeLogo.src}
                alt={darkModeLogo.alt}
                height={darkModeLogo.height}
                width={darkModeLogo.width}
                loading="eager"
                {...darkModeLogo}
              />
            </Avatar>
          )}
          {lastUpdated && (
            <div
              className="hidden flex-col md:flex"
              style={{
                fontSize: "clamp(0.6rem, 0.8rem, 0.9rem)",
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
              <time
                dateTime={lastUpdated}
                className="text-muted-foreground/60 hidden motion-reduce:inline"
              >
                {lastUpdated}
              </time>
            </div>
          )}
          {!hideProjectsButton && (
            <Button
              className="inline-flex md:hidden"
              variant={"outline"}
              size={"sm"}
              title="Visit my projects page"
              asChild
            >
              <a className="text-xs" href={"/projects"}>
                Projects
              </a>
            </Button>
          )}
          {showBackToCvButton && (
            <Button
              className="inline-flex md:hidden"
              variant={"default"}
              size={"sm"}
              asChild
            >
              <a href="/">
                <span className="flex items-center gap-1">
                  <ArrowLeftIcon />
                  <span>Back to CV</span>
                </span>
              </a>
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2">
          {!hideProjectsButton && (
            <Button
              className="hidden md:inline-flex"
              variant={"ghost"}
              size={"sm"}
              title="Visit my projects page"
              asChild
            >
              <a className="text-xs" href={"/projects"}>
                Projects
              </a>
            </Button>
          )}
          {showBackToCvButton && (
            <Button
              className="hidden md:inline-flex"
              size={"sm"}
              title="Visit my projects page"
              asChild
            >
              <a href="/">
                <span className="flex items-center gap-1">
                  <ArrowLeftIcon />
                  <span> Back to CV</span>
                </span>
              </a>
            </Button>
          )}

          {!hideDownloadButton && pdfDownloadLink && (
            <Button
              variant={"default"}
              size={"icon-sm"}
              title="Download this CV in PDF format"
              asChild
            >
              <a href={pdfDownloadLink} download>
                <DownloadIcon />
                <span className="sr-only md:hidden">Download</span>
              </a>
            </Button>
          )}
          {!hidePrintButton && shareLink && (
            <Button
              variant={"outline"}
              size={"icon-sm"}
              title="Click to copy the link to this page to your clipboard"
              onClick={() => {
                copyLink(shareLink);
              }}
            >
              <CopyIcon />
              <span className="sr-only">Copy link</span>
            </Button>
          )}

          <Button
            variant={"outline"}
            size={"icon-sm"}
            title="Click to print this CV"
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
