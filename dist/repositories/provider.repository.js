"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ProviderRepository {
    getAll() {
        return prisma.provider.findMany({
            include: {
                demands: {
                    include: {
                        actions: true
                    },
                    orderBy: { createdAt: 'desc' }
                }
            }
        });
    }
    getById(id) {
        return prisma.provider.findUnique({
            where: { id },
            include: {
                demands: {
                    include: {
                        actions: {
                            orderBy: { createdAt: 'asc' }
                        }
                    },
                    orderBy: { createdAt: 'desc' }
                }
            }
        });
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
