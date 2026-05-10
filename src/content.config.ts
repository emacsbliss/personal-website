import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        datePublished: z.coerce.date(),
        dateModified: z.coerce.date().optional(),
        tags: z.array(z.string()).optional(),
      }),
  }),
};
