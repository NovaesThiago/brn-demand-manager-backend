import { DemandRepository } from '../repositories/demand.repository';
import { CreateDemandInput, UpdateDemandInput } from '../schemas/demand.schema';

export class DemandService {
  private repo = new DemandRepository();

  getAll(filters?: { status?: string; providerId?: number }) {
    return this.repo.getAll(filters);
  }

  getById(id: number) {
    return this.repo.getById(id);
  }

  create(data: CreateDemandInput) {  // ✅ Tipagem específica
    return this.repo.create(data);
  }

  update(id: number, data: UpdateDemandInput) {  // ✅ Tipagem específica
    return this.repo.update(id, data);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}