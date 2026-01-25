"use client";

import type { SanitisedAsanaData } from "@/lib/engineering-asana-tasks";
import { formatNotes } from "@/lib/format-notes";
import { CircleCheckBigIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }: SanitisedAsanaData) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const formatDate = (isoString?: string) => {
    if (!isoString) {
      return;
    }

    const date = new Date(isoString);

    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }

    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });

    return formattedDate;
  };

  return (
    <div ref={containerRef}>
      <div ref={ref} className="relative w-fit mx-auto">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-24 md:gap-10">
            <div className="sticky top-40 z-40 flex flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex size-10 items-center justify-center rounded-full md:left-3">
                <CircleCheckBigIcon className="dark:text-primary size-8 rounded-full text-green-600 backdrop-blur-3xl" />
              </div>
              <div className="hidden md:block">
                <h3 className="text-foreground text-sm wrap-anywhere md:pl-20">
                  {item.name}
                </h3>
                <time
                  className="text-muted-foreground mt-1 text-xs md:pl-20"
                  dateTime={item.createdAt}
                >
                  {formatDate(item.createdAt)}
                </time>
              </div>
            </div>
            <div className="relative w-full pr-4 pl-20 md:pl-4">
              <div className="mb-4 block md:hidden">
                <h3 className="text-foreground text-left text-sm wrap-anywhere break-all">
                  {item.name}
                </h3>
                <time
                  className="text-muted-foreground mt-1 text-xs md:pl-20"
                  dateTime={item.createdAt}
                >
                  {formatDate(item.createdAt)}
                </time>
              </div>
              <pre className="text-muted-foreground w-full max-w-prose text-xs! text-balance wrap-anywhere whitespace-pre-line">
                {formatNotes(item.notes)}
              </pre>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
            interpolateSize: "allow-keywords",
          }}
          className="absolute top-0 left-8 w-0.5 overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 to-transparent to-99% mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-neutral-700"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              interpolateSize: "allow-keywords",
            }}
            className="from-primary via-primary absolute inset-x-0 top-0 w-1 rounded-full bg-linear-to-t from-0% via-10% to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
