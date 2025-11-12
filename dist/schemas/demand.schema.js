"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDemandSchema = exports.createDemandSchema = void 0;
const zod_1 = require("zod");
// Versão SIMPLES e FUNCIONAL
exports.createDemandSchema = zod_1.z.object({
    title: zod_1.z.string().min(3, 'Título deve ter pelo menos 3 caracteres'),
    description: zod_1.z.string().min(10, 'Descrição deve ter pelo menos 10 caracteres'),
    type: zod_1.z.enum(['Diagnóstico', 'Manutenção', 'Configuração', 'Instalação', 'Outro']),
    status: zod_1.z.enum(['Pendente', 'Em Andamento', 'Concluída', 'Cancelada']),
    providerId: zod_1.z.number().int().positive('ID do provedor é obrigatório'),
});
exports.updateDemandSchema = exports.createDemandSchema.partial();
