// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import aiReadiness from "@obaronai/astro-ai-readiness";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
  site: "https://lukedekiewit-cv.vercel.app",
  integrations: [
    react(),
    sitemap(),
    aiReadiness({
      site: "https://lukedekiewit-cv.vercel.app",
      organization: {
        name: "Luke De Kiewit",
        url: "https://lukedekiewit-cv.vercel.app",
        logo: "https://lukedekiewit-cv.vercel.app/images/logos/ldk_logo_atomwave_tilted_724px.png",
        founder: {
          name: "Luke De Kiewit",
          jobTitle: "Frontend Engineer",
          sameAs: [
            "https://lukedekiewit-cv.vercel.app",
            "https://lukedekiewit-cv.vercel.app/projects",
            "https://www.linkedin.com/in/lukedekiewit",
            "https://github.com/lukedekiewit",
          ],
        },
      },
      webSite: {
        description:
          "Frontend Engineer specialising in React, Next.js, and Astro. I build accessible, high-performance web applications and UI libraries — from platforms serving 200,000+ users to luxury Shopify storefronts for UK, EU, and US clients.",
      },
      llmsTxt: {
        summary:
          "Luke De Kiewit is a Frontend Engineer based in Bloemfontein, South Africa, specialising in React, Next.js, Astro, TypeScript, and Tailwind CSS. He has built platforms for 200,000+ learners, bespoke Shopify storefronts for UK, EU, and US luxury clients, and is the author of the Atomwave component library.",
        sections: [
          {
            title: "Luke De Kiewit - CV",
            links: [
              {
                title: "Luke De Kiewit - Interactive CV",
                url: "https://lukedekiewit-cv.vercel.app",
              },
              {
                title: "Luke De Kiewit - LinkedIn",
                url: "https://www.linkedin.com/in/lukedekiewit",
              },
              {
                title: "Luke De Kiewit - GitHub",
                url: "https://github.com/lukedekiewit",
              },
              {
                title: "Luke De Kiewit - CV PDF",
                url: "https://lukedekiewit-cv.vercel.app/files/Luke_De_Kiewit_FrontendEngineer_latest.pdf",
              },
            ],
          },
          {
            title: "Luke De Kiewit - Projects",
            links: [
              {
                title: "Projects Overview",
                url: "https://lukedekiewit-cv.vercel.app/projects",
              },
              {
                title: "Steam Player Search",
                url: "https://steam-player-search.vercel.app/",
              },
              {
                title: "Topic LMS",
                url: "https://lms.topic.co.za",
              },
              {
                title: "Marlin Brokers",
                url: "https://marlinbrokers.co.za/",
              },
              {
                title: "Marlin Cleaning Supplies",
                url: "https://marlincleaning.co.za/",
              },
            ],
          },
        ],
      },
      agentsMd: {
        description:
          "Luke De Kiewit is a Frontend Engineer with 3+ years of professional experience building scalable web applications, UI libraries, and e-commerce storefronts. He has worked at Bitcube (maritime logistics, renewable energy, luxury Shopify) and SOCO_ED (Topic LMS, 200,000+ learners). Open to remote work from Bloemfontein, South Africa (GMT+2). Languages: English, Afrikaans.",
        audience:
          "Recruiters, hiring managers, and collaborators looking for a frontend engineer with expertise in React, Next.js, Astro, TypeScript, and Shopify.",
        contact: "luke.dekiewit@yahoo.com",
        links: [
          {
            title: "Interactive CV",
            url: "https://lukedekiewit-cv.vercel.app/",
            description:
              "Luke's full CV including work history, education, tech stack, and references",
          },
          {
            title: "Projects",
            url: "https://lukedekiewit-cv.vercel.app/projects",
            description:
              "Portfolio of public, freelance, and professional projects",
          },
          {
            title: "CV PDF Download",
            url: "https://lukedekiewit-cv.vercel.app/files/Luke_De_Kiewit_FrontendEngineer_latest.pdf",
            description: "Downloadable PDF version of Luke's CV",
          },
          {
            title: "Steam Player Search",
            url: "https://steam-player-search.vercel.app/",
            description:
              "Next.js app using the Steam Web API to look up player stats and game libraries",
          },
          {
            title: "Topic LMS",
            url: "https://lms.topic.co.za",
            description:
              "Educational platform for 200,000+ South African high school learners",
          },
          {
            title: "Marlin Brokers",
            url: "https://marlinbrokers.co.za/",
            description:
              "Freelance Astro/React rebuild of a broker website from WordPress",
          },
          {
            title: "Marlin Cleaning Supplies",
            url: "https://marlincleaning.co.za/",
            description:
              "Freelance Astro/React website for a cleaning supplies company",
          },
          {
            title: "GitHub",
            url: "https://github.com/lukedekiewit",
            description: "Luke's public GitHub profile",
          },
          {
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/lukedekiewit",
            description: "Luke's LinkedIn profile",
          },
        ],
      },
    }),
  ],
});
