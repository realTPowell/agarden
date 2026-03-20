// @ts-check
import { defineConfig } from "astro/config";
import wikiLinkPlugin from "remark-wiki-link";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// posts are just at trpowell.net/[slug]
// let permalinks = await getPermalinks("./src/content/writing/");
// permalinks = permalinks.map((link) => {
//   return link.replace("src/content/writing", "") + ".md";
// });

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      [
        wikiLinkPlugin,
        {
          // pageResolver: (slug) => [slug],
          hrefTemplate: (link) => `${link}.md`,
        },
      ],
    ],
    rehypePlugins: [
      rehypeHeadingIds,
      // [rehypeAutolinkHeadings, { behavior: "append" }],
    ],
  },
});
