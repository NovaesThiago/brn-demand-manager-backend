import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ActionRepository {
  getAll() {
    return prisma.action.findMany({ include: { demand: true } });
  }

  getById(id: number) {
    return prisma.action.findUnique({ where: { id }, include: { demand: true } });
  }

  create(data: any) {
    return prisma.action.create({ data });
  }

  update(id: number, data: any) {
    return prisma.action.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.action.delete({ where: { id } });
  }
}