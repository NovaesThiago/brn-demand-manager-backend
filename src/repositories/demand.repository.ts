import { PrismaClient } from '@prisma/client';
import { CreateDemandInput, UpdateDemandInput } from '../schemas/demand.schema';

const prisma = new PrismaClient();

export class DemandRepository {
  getAll(filters?: { status?: string; providerId?: number }) {
    return prisma.demand.findMany({
      where: {
        ...(filters?.status && { status: filters.status }),
        ...(filters?.providerId && { providerId: filters.providerId }),
      },
      include: { provider: true, actions: true },
      orderBy: { createdAt: 'desc' }, // ✅ Mais recentes primeiro
    });
  }

  getById(id: number) {
    return prisma.demand.findUnique({ 
      where: { id }, 
      include: { provider: true, actions: { orderBy: { createdAt: 'asc' } } } 
    });
  }

  create(data: CreateDemandInput) {  // ✅ Tipagem específica
    return prisma.demand.create({ data });
  }

  update(id: number, data: UpdateDemandInput) {  // ✅ Tipagem específica
    return prisma.demand.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.demand.delete({ where: { id } });
  }
}