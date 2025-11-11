"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ProviderRepository {
    getAll() {
        return prisma.provider.findMany();
    }
    getById(id) {
        return prisma.provider.findUnique({ where: { id } });
    }
    create(data) {
        return prisma.provider.create({ data });
    }
    update(id, data) {
        return prisma.provider.update({ where: { id }, data });
    }
    delete(id) {
        return prisma.provider.delete({ where: { id } });
    }
}
exports.ProviderRepository = ProviderRepository;
