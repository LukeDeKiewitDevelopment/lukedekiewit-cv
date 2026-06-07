import type { ImageMetadata, ImageOutputFormat } from "astro";
import { getImage } from "astro:assets";

export const optimizeImage = async (
  image: ImageMetadata,
  format: ImageOutputFormat,
  width: number,
) => {

  if (!image) {
    throw new Error("No image provided for optimization.");
  }

  const optimizedImage = await getImage({
    src: image,
    format: format,
    width: width,
  });

  return optimizedImage;
};

export const optimizeImages = async (
  images: ImageMetadata[],
  format: ImageOutputFormat,
  width: number,
) => {
  if (images.length === 0) {
    return [];
  }

  const optimizedImages = await Promise.all(
    images.map((image) =>
      getImage({
        src: image,
        format: format,
        width: width,
      }),
    ),
  );
  return optimizedImages;
};
