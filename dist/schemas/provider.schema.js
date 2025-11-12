"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProviderSchema = exports.createProviderSchema = void 0;
const zod_1 = require("zod");
exports.createProviderSchema = zod_1.z.object({
    name: zod_1.z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
    email: zod_1.z.string().email('Email deve ser válido'), // ✅ ADICIONAR EMAIL
    contact: zod_1.z.string().min(5, 'Contato deve ter pelo menos 5 caracteres'),
    responsible: zod_1.z.string().min(3, 'Responsável deve ter pelo menos 3 caracteres'),
});
exports.updateProviderSchema = exports.createProviderSchema.partial();
