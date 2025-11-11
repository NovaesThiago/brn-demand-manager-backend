"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActionSchema = void 0;
const zod_1 = require("zod");
exports.createActionSchema = zod_1.z.object({
    description: zod_1.z.string().min(5),
    technician: zod_1.z.string().min(3),
    demandId: zod_1.z.coerce.number().int().positive(),
});
