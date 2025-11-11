"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionService = void 0;
const action_repository_1 = require("../repositories/action.repository");
class ActionService {
    constructor() {
        this.repo = new action_repository_1.ActionRepository();
    }
    getAll() {
        return this.repo.getAll();
    }
    getById(id) {
        return this.repo.getById(id);
    }
    getByDemand(demandId) {
        return this.repo.getByDemand(demandId);
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
exports.ActionService = ActionService;
