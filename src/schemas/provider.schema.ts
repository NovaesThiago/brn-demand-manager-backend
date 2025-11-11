import { z } from 'zod';

export const createProviderSchema = z.object({
  name: z.string().min(3),
  contact: z.string().min(5),
  responsible: z.string().min(3),
});