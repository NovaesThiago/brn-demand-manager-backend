"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemandRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class DemandRepository {
    getAll() {
        return prisma.demand.findMany({ include: { provider: true, actions: true } });
    }
    getById(id) {
        return prisma.demand.findUnique({ where: { id }, include: { provider: true, actions: true } });
    }
    create(data) {
        return prisma.demand.create({ data });
    }
    update(id, data) {
        return prisma.demand.update({ where: { id }, data });
    }
    delete(id) {
        return prisma.demand.delete({ where: { id } });
    }
}
exports.DemandRepository = DemandRepository;
