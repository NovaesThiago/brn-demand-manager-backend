import { z } from 'zod';

export const createProviderSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email deve ser válido'), // ✅ ADICIONAR EMAIL
  contact: z.string().min(5, 'Contato deve ter pelo menos 5 caracteres'),
  responsible: z.string().min(3, 'Responsável deve ter pelo menos 3 caracteres'),
});

export const updateProviderSchema = createProviderSchema.partial();

export type CreateProviderInput = z.infer<typeof createProviderSchema>;
export type UpdateProviderInput = z.infer<typeof updateProviderSchema>;