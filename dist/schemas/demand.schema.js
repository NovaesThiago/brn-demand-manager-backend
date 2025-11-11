"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDemandSchema = void 0;
const zod_1 = require("zod");
exports.createDemandSchema = zod_1.z.object({
    title: zod_1.z.string().min(3),
    description: zod_1.z.string().min(10),
    type: zod_1.z.enum(['Diagnóstico', 'Manutenção', 'Configuração', 'Instalação', 'Outro']),
    providerId: zod_1.z.string().uuid(),
});
