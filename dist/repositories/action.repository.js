"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ActionRepository {
    getAll() {
        return prisma.action.findMany({ include: { demand: true } });
    }
    getById(id) {
        return prisma.action.findUnique({ where: { id }, include: { demand: true } });
    }
    getByDemand(demandId) {
        return prisma.action.findMany({
            where: { demandId: Number(demandId) },
            include: { demand: true },
            orderBy: { createdAt: 'asc' },
        });
    }
    create(data) {
        return prisma.action.create({ data });
    }
    update(id, data) {
        return prisma.action.update({ where: { id }, data });
    }
    delete(id) {
        return prisma.action.delete({ where: { id } });
    }
}
exports.ActionRepository = ActionRepository;
