import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    status: z.enum(['active', 'paused', 'complete', 'idea']),
    tags: z.array(z.string()).default([]),
    url: z.url().optional(),
    featured: z.boolean().default(false),
  }),
});

const thoughts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/thoughts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const readings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/readings' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    type: z.enum(['book', 'article', 'paper']),
    status: z.enum(['reading', 'finished', 'queued']),
    rating: z.number().min(1).max(5).optional(),
    url: z.url().optional(),
    notes: z.string().optional(),
  }),
});

export const collections = { projects, thoughts, readings };
