import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class DemandRepository {
  getAll() {
    return prisma.demand.findMany({ include: { provider: true, actions: true } });
  }

  getById(id: number) {
    return prisma.demand.findUnique({ where: { id }, include: { provider: true, actions: true } });
  }

  create(data: any) {
    return prisma.demand.create({ data });
  }

  update(id: number, data: any) {
    return prisma.demand.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.demand.delete({ where: { id } });
  }
}