"use client";

import { Timeline } from "@/components/ui/timeline";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ecommerceAsanaTasks } from "@/lib/ecommerce-asana-tasks";
import { BackToTop } from "../back-to-top";

type ShowcaseNavigation = "ecom-timeline" | "project-highlights";

export const Showcase = () => {
  const [activeShowcaseSection, setActiveShowcaseSection] =
    useState<ShowcaseNavigation>("ecom-timeline");

  const ShowcaseNavigation = () => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl uppercase selection:text-shadow-none md:text-3xl dark:text-shadow-black dark:text-shadow-xs">
            Luke De Kiewit
          </h1>
          <span className="text-muted-foreground text-xs selection:text-shadow-none dark:text-shadow-black dark:text-shadow-xs">
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
              activeShowcaseSection === "project-highlights"
                ? "default"
                : "ghost"
            }
            onClick={() => setActiveShowcaseSection("project-highlights")}
            className="data-[variant=default]:hover:bg-primary data-[variant=default]:shadow-md"
          >
            Project Highlights
          </Button>
        </nav>
        <Separator />
        <BackToTop />
      </div>
    );
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <ShowcaseNavigation />
      <main>
        {/* {activeShowcaseSection === "ecom-timeline" && (
          <div className="text-muted-foreground mt-12 flex flex-col items-center justify-center gap-4 text-center text-xs text-balance wrap-break-word">
            <span className="text-muted-foreground/90">
              Data snapshot retrieved using the Asana API.
            </span>
          </div>
        )} */}
        {activeShowcaseSection === "ecom-timeline" && <ShowcaseEcomTimeline />}
        {activeShowcaseSection === "project-highlights" && (
          <ShowcaseProjectHighlights />
        )}
      </main>
    </div>
  );
};

const ShowcaseEcomTimeline = () => {
  return (
    <section>
      <Timeline data={ecommerceAsanaTasks.data} />
    </section>
  );
};

const ShowcaseProjectHighlights = () => {
  return (
    <section>
      <span>TAE</span>
      <span>MIB</span>
      <span>NTW</span>
      <span></span>
      <div>
        <h5>Other Notable Projects</h5>
        <ul>
          <li>Atomwave Component Library</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};
