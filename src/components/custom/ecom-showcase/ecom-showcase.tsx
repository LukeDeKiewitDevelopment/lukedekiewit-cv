"use client";

import { Timeline } from "@/components/ui/timeline";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ecommerceAsanaTasks } from "@/lib/ecommerce-asana-tasks";
import { BackToTop } from "../back-to-top";

type EcomShowcaseNavigation = "ecom-timeline" | "ecom-project-highlights";

export const EcomShowcase = () => {
  const [activeShowcaseSection, setActiveShowcaseSection] =
    useState<EcomShowcaseNavigation>("ecom-timeline");

  const EcomShowcaseNavigation = () => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl uppercase selection:text-shadow-none md:text-3xl dark:text-shadow-black dark:text-shadow-xs">
            Luke De Kiewit
          </h1>
          <span className="text-muted-foreground text-xs selection:text-shadow-none dark:text-shadow-black dark:text-shadow-xs">
            {"Ecommerce Showcase "} <i className="not-italic select-none">|</i>{" "}
            {" Application to "}
            <a
              href="https://r17ventures.com/"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="hover:text-primary hover:underline"
            >
              R17 Ventures
            </a>
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
        </nav>
        <Separator />
      </div>
    );
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <EcomShowcaseNavigation />
      <main>
        {activeShowcaseSection === "ecom-timeline" && (
          <div className="text-muted-foreground mt-12 flex flex-col items-center justify-center gap-4 text-center text-xs text-balance wrap-break-word">
            <p className="text-muted-foreground/90 max-w-prose">
              This is a complete timeline of all the tasks I completed across
              multiple Ecommerce projects at Bitcube. All proprietary and
              sensitive details, including project names, have been redacted.
            </p>
            <span className="">
              Data snapshot retrieved using the Asana API.
            </span>
          </div>
        )}
        {activeShowcaseSection === "ecom-timeline" && <EcomShowcaseTimeline />}
        {activeShowcaseSection === "ecom-project-highlights" && (
          <EcomProjectHighlights />
        )}
      </main>
    </div>
  );
};

const EcomShowcaseTimeline = () => {
  return (
    <>
      <section className="animate-in fade-in flex justify-center duration-300">
        <Timeline data={ecommerceAsanaTasks.data} />
      </section>
      <BackToTop />
    </>
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
