"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemandController = exports.createProvider = void 0;
const demand_service_1 = require("../services/demand.service");
const demand_schema_1 = require("../schemas/demand.schema");
const demandService = new demand_service_1.DemandService();
const createProvider = async (req, res, next) => {
    try {
        const validated = demand_schema_1.createDemandSchema.parse(req.body);
        const demand = await demandService.create(validated);
        res.status(201).json(demand);
    }
    catch (error) {
        next(error);
    }
};
exports.createProvider = createProvider;
class DemandController {
    constructor() {
        this.service = new demand_service_1.DemandService();
        this.getAll = async (req, res) => {
            const demands = await this.service.getAll();
            res.json(demands);
        };
        this.getById = async (req, res) => {
            const demand = await this.service.getById(Number(req.params.id));
            res.json(demand);
        };
        this.create = async (req, res) => {
            const demand = await this.service.create(req.body);
            res.status(201).json(demand);
        };
        this.update = async (req, res) => {
            const demand = await this.service.update(Number(req.params.id), req.body);
            res.json(demand);
        };
        this.delete = async (req, res) => {
            await this.service.delete(Number(req.params.id));
            res.status(204).send();
        };
    }
}
exports.DemandController = DemandController;
