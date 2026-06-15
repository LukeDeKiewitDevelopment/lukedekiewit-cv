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
  site: "https://lukedekiewit-cv.vercel.app/",
  integrations: [
    react(),
    sitemap(),
    // aiReadiness({
    //   site: "https://lukedekiewit-cv.vercel.app/",
    //   organization: {
    //     name: "Luke De Kiewit",
    //     url: "https://lukedekiewit-cv.vercel.app/",
    //     logo: "https://lukedekiewit-cv.vercel.app/images/logos/static/ldk_logo_atomwave_tilted_724px.png",
    //     founder: {
    //       name: "Luke De Kiewit",
    //       jobTitle: "Frontend Engineer",
    //       sameAs: ["https://lukedekiewit-cv.vercel.app/"],
    //     },
    //   },
    //   webSite: {
    //     // Optional. `name` defaults to organization.name when absent.
    //     description: "What your site does, in one sentence.",
    //   },
    //   llmsTxt: {
    //     // Optional. When set, the toolkit ships dist/llms.txt at build time.
    //     // Note: `summary` must be single-line — multi-paragraph summaries break
    //     // the llms.txt blockquote shape. Use `body` (free-form markdown) for
    //     // additional prose. Multi-line summary throws at config-validation time.
    //     summary:
    //       "What your site does, in one sentence — for AI agents discovering your content.",
    //     body: "A free-form markdown paragraph or two between summary and sections. Plain prose; no top-level H2 here (those are reserved for link sections below).",
    //     sections: [
    //       {
    //         title: "Articles",
    //         links: [
    //           { title: "All Articles", url: "https://your-site.com/articles/" },
    //           { title: "RSS Feed", url: "https://your-site.com/rss.xml" },
    //         ],
    //       },
    //     ],
    //     deferTo: {
    //       // Single canonical-reference link, rendered as a footer.
    //       title: "Articles Index",
    //       url: "https://your-site.com/articles/",
    //     },
    //   },
    //   agentsMd: {
    //     // Optional. When set, the toolkit ships dist/agents.md at build time.
    //     description:
    //       "What your site does and who it serves — for AI-agent crawlers.",
    //     audience: "Developers and AI agents acting on their behalf.",
    //     contact: "hello@your-site.com",
    //     links: [
    //       {
    //         title: "Articles",
    //         url: "https://your-site.com/articles/",
    //         description: "All articles",
    //       },
    //       {
    //         title: "RSS Feed",
    //         url: "https://your-site.com/rss.xml",
    //         description: "Machine-readable article stream",
    //       },
    //     ],
    //   },
    //   mcp: {
    //     // Optional. When set, the toolkit ships dist/.well-known/mcp.json at build time.
    //     // Each server must have status: 'active' or status: 'planned'.
    //     // Active: requires url + tools[]. Planned: requires planned_tools[]; url is forbidden.
    //     servers: [
    //       {
    //         // A live MCP server — must have url + tools.
    //         status: "active",
    //         name: "your-knowledge",
    //         url: "https://mcp.your-site.com",
    //         description:
    //           "MCP server exposing your site knowledge for AI agents.",
    //         tools: [
    //           {
    //             name: "search_articles",
    //             description: "Search articles by keyword or tag.",
    //           },
    //           {
    //             name: "fetch_article",
    //             description: "Fetch a specific article by slug.",
    //           },
    //         ],
    //       },
    //       {
    //         // A planned server — declares intent without a live URL.
    //         status: "planned",
    //         name: "your-future-server",
    //         description: "Planned MCP server for future capability.",
    //         planned_tools: [
    //           {
    //             name: "lookup",
    //             description: "Lookup by ID once the server ships.",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // }),
  ],
});
