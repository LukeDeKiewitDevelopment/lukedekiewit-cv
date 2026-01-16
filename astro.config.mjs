// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import webmanifest from "astro-webmanifest";
import itsmatteomanfsecurityTxt from "@itsmatteomanf/astro-security-txt";
import htaccess from "astro-htaccess";
import path from "node:path";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },

  integrations: [react()],
});
