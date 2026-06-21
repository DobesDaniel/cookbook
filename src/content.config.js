import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const recipes = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/recipes",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    language: z.enum(["cs", "en"]),
    translationKey: z.string(),
    preparationTime: z.object({
    min: z.number(),
    max: z.number().optional(),
    }),
    servings: z.number(),
    tags: z.array(z.string()),
    image: z.string(),
    ingredients: z.array(z.string()),
  }),
});

export const collections = { recipes };