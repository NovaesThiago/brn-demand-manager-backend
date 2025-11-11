"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProviderSchema = void 0;
const zod_1 = require("zod");
exports.createProviderSchema = zod_1.z.object({
    name: zod_1.z.string().min(3),
    contact: zod_1.z.string().min(5),
    responsible: zod_1.z.string().min(3),
});
