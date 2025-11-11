import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ProviderRepository {
  getAll() {
    return prisma.provider.findMany();
  }

  getById(id: number) {
    return prisma.provider.findUnique({ where: { id } });
  }

  create(data: any) {
    return prisma.provider.create({ data });
  }

  update(id: number, data: any) {
    return prisma.provider.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.provider.delete({ where: { id } });
  }
}