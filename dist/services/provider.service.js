"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderService = void 0;
const provider_repository_1 = require("../repositories/provider.repository");
class ProviderService {
    constructor() {
        this.repo = new provider_repository_1.ProviderRepository();
    }
    getAll() {
        return this.repo.getAll();
    }
    getById(id) {
        return this.repo.getById(id);
    }
    create(data) {
        return this.repo.create(data);
    }
    update(id, data) {
        return this.repo.update(id, data);
    }
    delete(id) {
        return this.repo.delete(id);
    }
}
exports.ProviderService = ProviderService;
