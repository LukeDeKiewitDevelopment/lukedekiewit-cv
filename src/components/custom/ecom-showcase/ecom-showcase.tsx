"use client";

import { Timeline } from "@/components/ui/timeline";
import { useEffect, useState } from "react";
import { getAsanaData } from "./fetch-asana-tasks_DELETE_LATER";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type EcomShowcaseNavigation =
  | "ecom-timeline"
  | "ecom-section-showcase"
  | "ecom-project-highlights";

export const EcomShowcase = () => {
  const [activeShowcaseSection, setActiveShowcaseSection] =
    useState<EcomShowcaseNavigation>("ecom-timeline");

  // Use to fetch all tasks you did from Asana. Must still be organised later.
  // useEffect(() => {
  //   getAsanaData();
  // }, []);

  const EcomShowcaseNavigation = () => {
    return (
      <div className="flex flex-col gap-4 bg-blend-color-burn">
        <div className="flex flex-col text-center">
          <h1 className="text-2xl uppercase selection:text-shadow-none md:text-3xl dark:text-shadow-black dark:text-shadow-xs">
            Luke De Kiewit
          </h1>
          <span className="text-muted-foreground text-xs selection:text-shadow-none dark:text-shadow-black dark:text-shadow-xs">
            {"Application to "}
            <a
              href="https://r17ventures.com/"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="hover:text-primary text-foreground/70 text-right hover:underline"
            >
              R17 Ventures
            </a>
            {" - Website Developer Position"}
          </span>
        </div>
        <Separator />
        <nav className="flex flex-wrap items-center justify-center gap-4">
          <Button
            size="sm"
            variant={
              activeShowcaseSection === "ecom-timeline" ? "default" : "ghost"
            }
            onClick={() => setActiveShowcaseSection("ecom-timeline")}
            className="data-[variant=default]:hover:bg-primary data-[variant=default]:shadow-md"
          >
            Ecommerce Timeline
          </Button>
          <Button
            size="sm"
            variant={
              activeShowcaseSection === "ecom-project-highlights"
                ? "default"
                : "ghost"
            }
            onClick={() => setActiveShowcaseSection("ecom-project-highlights")}
            className="data-[variant=default]:hover:bg-primary data-[variant=default]:shadow-md"
          >
            Ecommerce Project Highlights
          </Button>
          <Button
            size="sm"
            variant={
              activeShowcaseSection === "ecom-section-showcase"
                ? "default"
                : "ghost"
            }
            onClick={() => setActiveShowcaseSection("ecom-section-showcase")}
            className="data-[variant=default]:hover:bg-primary data-[variant=default]:shadow-md"
          >
            Shopify Sections Showcase
          </Button>
        </nav>
        <Separator />
      </div>
    );
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <EcomShowcaseNavigation />
      <main className="mt-4 md:mt-6 lg:mt-8">
        {activeShowcaseSection === "ecom-timeline" && <EcomShowcaseTimeline />}
        {activeShowcaseSection === "ecom-project-highlights" && (
          <EcomProjectHighlights />
        )}
        {activeShowcaseSection === "ecom-section-showcase" && (
          <EcomShowcaseSection />
        )}
      </main>
    </div>
  );
};

const EcomShowcaseTimeline = () => {
  return (
    <section>
      <Timeline data={[]} />
    </section>
  );
};

const EcomShowcaseSection = () => {
  return (
    <section>
      <div>SECTIONS SHOWCASE</div>
    </section>
  );
};

const EcomProjectHighlights = () => {
  return (
    <section>
      <div>PROJECT HIGHLIGHTS</div>
    </section>
  );
};
