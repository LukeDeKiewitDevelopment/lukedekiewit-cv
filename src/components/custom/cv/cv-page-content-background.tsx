import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import { Image } from "astro:assets";

export type CVPageContentBackgroundProps = ComponentPropsWithoutRef<"img">;

export const CVPageContentBackground = ({
  className,
  ...props
}: CVPageContentBackgroundProps) => {
  return (
    <img
      {...props}
      alt=""
      data-slot="cv-page-content-background"
      aria-hidden="true"
      loading="lazy"
      className={clsx(
        "pointer-events-none absolute top-0 right-0 bottom-0 left-0 -z-10 m-0 size-full border-none object-cover select-none",
        className,
      )}
    />
  );
};
