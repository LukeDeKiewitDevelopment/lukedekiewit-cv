import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import { motion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export type SiteBackgroundProps = {
  backgroundImage?: SiteBackgroundImage;
};

export type SiteBackgroundImage = ComponentPropsWithoutRef<"img">;

export const SiteBackground = ({ backgroundImage }: SiteBackgroundProps) => {
  return (
    <>
      <img
        {...backgroundImage}
        alt=""
        aria-hidden="true"
        className={clsx(
          "pointer-events-none fixed top-0 right-0 bottom-0 left-0 -z-1000 m-0 size-full min-h-screen min-w-screen border-none object-cover select-none",
          backgroundImage?.className,
        )}
      />
      <AuroraBackground className="fixed top-0 left-0 -z-2000 size-full min-h-screen min-w-screen motion-reduce:hidden print:hidden!">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: "easeInOut",
          }}
        ></motion.div>
      </AuroraBackground>
    </>
  );
};
