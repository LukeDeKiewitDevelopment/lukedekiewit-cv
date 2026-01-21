"use client";

import { Timeline } from "@/components/ui/timeline";
import { useEffect, useState } from "react";
import { getAsanaData } from "./fetch-asana-tasks_DELETE_LATER";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

type EcomShowcaseNavigation =
  | "ecom-timeline"
  | "ecom-section-showcase"
  | "ecom-project-highlights";

export const EcomShowcase = () => {
  const [activeShowcaseSection, setActiveShowcaseSection] =
    useState<EcomShowcaseNavigation>("ecom-timeline");
  const [showIndex, setShowIndex] = useState<boolean>(false);

  // Use to fetch all tasks you did from Asana. Must still be organised later.
  // useEffect(() => {
  //   getAsanaData();
  // }, []);

  const EcomShowcaseNavigation = () => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl uppercase selection:text-shadow-none md:text-3xl dark:text-shadow-black dark:text-shadow-xs">
            Luke De Kiewit
          </h1>
          <span className="text-muted-foreground text-xs selection:text-shadow-none dark:text-shadow-black dark:text-shadow-xs">
            {"Application to "}
            <a
              href="https://r17ventures.com/"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="hover:text-primary hover:underline"
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
        <EcomShowcaseIndex />
      </div>
    );
  };

  const EcomShowcaseIndex = () => {
    return (
      activeShowcaseSection === "ecom-timeline" && (
        <div className="flex flex-col gap-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <label
              htmlFor="ecom-showcase-index-toggle"
              className="text-sm uppercase"
            >
              Index
            </label>
            <Checkbox
              className="size-4"
              id="ecom-showcase-index-toggle"
              checked={showIndex}
              onCheckedChange={() => {
                setShowIndex(!showIndex);
              }}
            />
          </div>
          {showIndex && (
            <div className="text-muted-foreground animate-in fade-in slide-in-from-top-full flex flex-wrap items-center justify-center gap-2 text-center text-xs">
              <a
                className="hover:text-primary hover:underline"
                href="#project-alpha"
              >
                Project Alpha
              </a>
              <i className="not-italic select-none">|</i>
              <a
                className="hover:text-primary hover:underline"
                href="#project-beta"
              >
                Project Beta
              </a>
              <i className="not-italic select-none">|</i>
              <a
                className="hover:text-primary hover:underline"
                href="#project-delta"
              >
                Project Delta
              </a>
              <i className="not-italic select-none">|</i>
              <a
                className="hover:text-primary hover:underline"
                href="#project-gamma"
              >
                Project Gamma
              </a>
              <i className="not-italic select-none">|</i>
              <a
                className="hover:text-primary hover:underline"
                href="#project-theta"
              >
                Project Theta
              </a>
              <i className="not-italic select-none">|</i>
              <a
                className="hover:text-primary hover:underline"
                href="#project-epsilon"
              >
                Project Epsilon
              </a>
            </div>
          )}
          <Separator />
        </div>
      )
    );
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <EcomShowcaseNavigation />
      <main>
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
    <section className="mt-4">
      <Timeline data={[]} />
    </section>
  );
};

const EcomShowcaseSection = () => {
  return (
    <section className="mt-4">
      <div>SECTIONS SHOWCASE</div>
    </section>
  );
};

const EcomProjectHighlights = () => {
  return (
    <section className="mt-4">
      <div>PROJECT HIGHLIGHTS</div>
    </section>
  );
};
