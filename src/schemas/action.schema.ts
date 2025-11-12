import { z } from 'zod';

export const createActionSchema = z.object({
  description: z.string().min(5),
  technician: z.string().min(3),
  demandId: z.number().int().positive(),
});

export const updateActionSchema = createActionSchema.partial();