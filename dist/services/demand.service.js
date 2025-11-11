"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemandService = void 0;
const demand_repository_1 = require("../repositories/demand.repository");
class DemandService {
    constructor() {
        this.repo = new demand_repository_1.DemandRepository();
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
exports.DemandService = DemandService;
