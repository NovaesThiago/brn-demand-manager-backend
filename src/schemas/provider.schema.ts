import { z } from 'zod';

// Schema para criação (já existe)
export const createProviderSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  contact: z.string().min(5, 'Contato deve ter pelo menos 5 caracteres'),
  responsible: z.string().min(3, 'Responsável deve ter pelo menos 3 caracteres'),
});

// Schema para atualização (PARCIAL - todos os campos opcionais)
export const updateProviderSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres').optional(),
  contact: z.string().min(5, 'Contato deve ter pelo menos 5 caracteres').optional(),
  responsible: z.string().min(3, 'Responsável deve ter pelo menos 3 caracteres').optional(),
});

// Se quiser ser mais rigoroso, pode usar partial()
export const updateProviderSchemaPartial = createProviderSchema.partial();