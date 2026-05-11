import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");
  return rss({
    title: "emacsbliss",
    description: "Personal website and blog",
    site: context.site!.origin,
    items: posts
      .sort((a, b) => b.data.datePublished.valueOf() - a.data.datePublished.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.datePublished,
        description: post.data.description,
        link: `/blog/${post.id}`,
      })),
  });
}
