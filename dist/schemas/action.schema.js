"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateActionSchema = exports.createActionSchema = void 0;
const zod_1 = require("zod");
exports.createActionSchema = zod_1.z.object({
    description: zod_1.z.string().min(5, 'Descrição deve ter pelo menos 5 caracteres'),
    technician: zod_1.z.string().min(3, 'Nome do técnico deve ter pelo menos 3 caracteres'),
    demandId: zod_1.z.number().int().positive('ID da demanda é obrigatório'),
});
exports.updateActionSchema = exports.createActionSchema.partial();
