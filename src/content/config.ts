// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const essaysCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    readTime: z.number(),
    tags: z.array(z.string()).optional(),
  }),
});

const aphorismsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    content: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});

const notesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.date(),
    tags: z.array(z.string()).optional(),
    // Notes don't need a title - the content itself is shown
  }),
});

export const collections = {
  blog,
  essays: essaysCollection,
  aphorisms: aphorismsCollection,
  notes: notesCollection,
};
