"use client";

import { Timeline } from "@/components/ui/timeline";
import { useEffect, useState } from "react";
import { getAsanaData } from "@/lib/fetch-asana-tasks";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SkillBadgeIcon } from "../skill-badge";
import { siAsana } from "simple-icons";
import { ecomData } from "@/lib/ecom-asana-tasks";
type EcomShowcaseNavigation =
  | "ecom-timeline"
  | "ecom-section-showcase"
  | "ecom-project-highlights";

export const EcomShowcase = () => {
  const [activeShowcaseSection, setActiveShowcaseSection] =
    useState<EcomShowcaseNavigation>("ecom-timeline");

  // useEffect(() => {
  //   getAsanaData(
  //     import.meta.env.ASANA_TOKEN,
  //     import.meta.env.ASANA_WORKSPACE_ID,
  //   );
  // }, [activeShowcaseSection]);

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
      <main>
        {activeShowcaseSection === "ecom-timeline" && (
          <div className="mt-4 flex flex-wrap items-center justify-end">
            <div className="text-muted-foreground flex items-center gap-2 text-right text-xs uppercase">
              <span> Data snapshot retrieved using the </span>
              <SkillBadgeIcon
                title="Asana Icon"
                hex="var(--muted-foreground)"
                path={siAsana.path}
                className="inline size-[3.75mm] shrink-0 align-middle mb-0.5"
              />
              Asana API
            </div>
          </div>
        )}
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
      <Timeline data={ecomData.data} />
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
