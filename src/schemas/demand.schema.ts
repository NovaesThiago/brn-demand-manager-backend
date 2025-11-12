import { z } from 'zod';

export const createDemandSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  type: z.enum(['Diagnóstico', 'Manutenção', 'Configuração', 'Instalação', 'Outro']),
  status: z.enum(['Pendente', 'Em Andamento', 'Concluída', 'Cancelada']),
  providerId: z.number().int().positive(),
});

export const updateDemandSchema = createDemandSchema.partial();