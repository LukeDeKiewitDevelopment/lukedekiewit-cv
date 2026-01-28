"use client";

import { Timeline } from "@/components/ui/timeline";
import { Separator } from "@/components/ui/separator";
import { ecommerceAsanaTasks } from "@/lib/ecommerce-asana-tasks";

export const Showcase = () => {
  const ShowcaseNavigation = () => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl uppercase selection:text-shadow-none md:text-3xl dark:text-shadow-black dark:text-shadow-xs">
            Luke De Kiewit - Ecommerce Timeline
          </h1>
        </div>
        <Separator />
      </div>
    );
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <ShowcaseNavigation />
      <main>
        <div className="text-muted-foreground mt-12 flex flex-col items-center justify-center gap-4 text-center text-xs text-balance wrap-break-word">
          <span className="text-muted-foreground/90">
            Data snapshot retrieved using the Asana API.
          </span>
        </div>

        <ShowcaseEcomTimeline />
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
