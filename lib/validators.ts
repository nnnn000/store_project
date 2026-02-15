import { z } from "zod";

// Schema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 charaters"),
  slub: z.string().min(3, "Name must be at least 3 charaters"),
  slub: z.string().min(3, "Name must be at least 3 charaters"),
  slub: z.string().min(3, "Name must be at least 3 charaters"),
  slub: z.string().min(3, "Name must be at least 3 charaters"),
  slub: z.string().min(3, "Name must be at least 3 charaters"),
  slub: z.string().min(3, "Name must be at least 3 charaters"),
});
