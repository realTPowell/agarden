import { z, defineCollection } from "astro:content";

const writingCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			tags: z.array(z.string()),
			date: z.date(),
		}),
});

export const collections = {
	writing: writingCollection,
};
