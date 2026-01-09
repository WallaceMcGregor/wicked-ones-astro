// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// Definir un 'esquema' para cada colección
const registrosCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    resumen: z.string(),
    // Si tuvieras imágenes en el frontmatter, podrías usar:
    // image: z.string().optional(),
  }),
});

// Exportar un solo objeto `collections` con todas tus colecciones
export const collections = {
  'registros': registrosCollection,
};
