import { ProviderRepository } from '../repositories/provider.repository';

export class ProviderService {
  private repo = new ProviderRepository();

  getAll() {
    return this.repo.getAll();
  }

  getById(id: number) {
    return this.repo.getById(id);
  }

  create(data: any) {
    return this.repo.create(data);
  }

  update(id: number, data: any) {
    return this.repo.update(id, data);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}