import { z } from 'zod';

// Versão SIMPLES e FUNCIONAL
export const createDemandSchema = z.object({
  title: z.string().min(3, 'Título deve ter pelo menos 3 caracteres'),
  description: z.string().min(10, 'Descrição deve ter pelo menos 10 caracteres'),
  type: z.enum(['Diagnóstico', 'Manutenção', 'Configuração', 'Instalação', 'Outro']),
  status: z.enum(['Pendente', 'Em Andamento', 'Concluída', 'Cancelada']),
  providerId: z.number().int().positive('ID do provedor é obrigatório'),
});

export const updateDemandSchema = createDemandSchema.partial();

// Tipos para usar no service/repository
export type CreateDemandInput = z.infer<typeof createDemandSchema>;
export type UpdateDemandInput = z.infer<typeof updateDemandSchema>;