// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
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
  blog: blogCollection,
  essays: essaysCollection,
  aphorisms: aphorismsCollection,
  notes: notesCollection,
};
