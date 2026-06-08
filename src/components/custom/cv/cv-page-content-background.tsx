import type { GetImageResult } from "astro";
import clsx from "clsx";

export type CVPageContentBackgroundProps = {
  backgroundImage: GetImageResult;
  className?: string;
};

export const CVPageContentBackground = ({
  backgroundImage,
  className,
}: CVPageContentBackgroundProps) => {
  return (
    <img
      src={backgroundImage.src}
      {...(backgroundImage.srcSet.attribute && {
        srcSet: backgroundImage?.srcSet.attribute,
      })}
      alt=""
      data-slot="cv-page-content-background"
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className={clsx(
        "pointer-events-none absolute top-0 right-0 bottom-0 left-0 -z-10 m-0 size-full border-none object-cover select-none",
        className,
      )}
    />
  );
};
