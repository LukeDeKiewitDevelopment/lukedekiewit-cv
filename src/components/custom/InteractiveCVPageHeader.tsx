"use client";

import { Download, Printer, Share } from 'lucide-react';
import { toast } from 'sonner';

import { AvatarFallback } from '@radix-ui/react-avatar';

import { Avatar, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Toaster } from '../ui/sonner';

interface InteractiveCVPageHeaderProps {
  avatar?: {
    src: string;
    alt: string;
  };
  lastUpdated: string;
  shareLink: string;
}

export const InteractiveCVPageHeader = ({
  avatar,
  lastUpdated,
  shareLink,
}: InteractiveCVPageHeaderProps) => {
  const copyLink = () => {
    navigator.clipboard.writeText(shareLink);
    toast.custom(()=>{
      
    });
  };

  return (
    <div className="bg-card flex flex-col">
      <div className="flex items-center justify-between gap-4 p-4 sm:p-4 md:flex-row md:p-6 lg:flex-row lg:p-8">
        <div className="flex items-center gap-2">
          {avatar && (
            <Avatar className="hidden shadow-black sm:hidden md:flex md:size-10">
              <AvatarImage src={avatar.src} alt={avatar.alt} />
            </Avatar>
          )}
          <div className="text-foreground/60 flex flex-col text-sm">
            <span>Last Updated:</span>
            <time>{lastUpdated}</time>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant={"default"} aria-label="Download CV">
            <Download />
            <span className="hidden sm:hidden md:inline-flex">Download</span>
          </Button>
          <Button
            variant={"outline"}
            aria-label="Share this page"
            onClick={() => {
              copyLink();
            }}
          >
            <Share />
            <span className="hidden sm:hidden md:inline-flex">Share</span>
          </Button>
        </div>
      </div>
      <Separator className="bg-muted border" decorative />
      <Toaster position="bottom-center" />
    </div>
  );
};
