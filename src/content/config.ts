import { z, defineCollection } from "astro:content";

const statuses = ["new", "growing", "bloom", "compost"]

const writingCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			tags: z.array(z.string()),
			date: z.date(),
			status: z.enum(statuses),
		}),
});

export const collections = {
	writing: writingCollection,
};
