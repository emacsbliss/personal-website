import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://emacsbliss.com",
  integrations: [mdx(), sitemap()],
  server: {
    allowedHosts: ["emacsbliss.com", "blog.emacsbliss.com"],
  },
});
