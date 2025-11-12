"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemandController = void 0;
const demand_service_1 = require("../services/demand.service");
const demand_schema_1 = require("../schemas/demand.schema"); // Import atualizado
class DemandController {
    constructor() {
        this.service = new demand_service_1.DemandService();
        this.getAll = async (req, res) => {
            try {
                const demands = await this.service.getAll();
                res.json(demands);
            }
            catch (error) {
                res.status(500).json({ message: 'Erro interno do servidor' });
            }
        };
        this.getById = async (req, res) => {
            try {
                const demand = await this.service.getById(Number(req.params.id));
                if (!demand) {
                    return res.status(404).json({ message: 'Demanda não encontrada' });
                }
                res.json(demand);
            }
            catch (error) {
                res.status(500).json({ message: 'Erro interno do servidor' });
            }
        };
        this.create = async (req, res) => {
            try {
                const validated = demand_schema_1.createDemandSchema.parse(req.body);
                const demand = await this.service.create(validated);
                res.status(201).json(demand);
            }
            catch (error) {
                res.status(400).json({ message: 'Dados inválidos', error });
            }
        };
        this.update = async (req, res) => {
            try {
                const validated = demand_schema_1.updateDemandSchema.parse(req.body);
                const demand = await this.service.update(Number(req.params.id), validated);
                if (!demand) {
                    return res.status(404).json({ message: 'Demanda não encontrada' });
                }
                res.json(demand);
            }
            catch (error) {
                res.status(400).json({ message: 'Dados inválidos', error });
            }
        };
        this.delete = async (req, res) => {
            try {
                const deleted = await this.service.delete(Number(req.params.id));
                if (!deleted) {
                    return res.status(404).json({ message: 'Demanda não encontrada' });
                }
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ message: 'Erro interno do servidor' });
            }
        };
        this.getWithFilters = async (req, res) => {
            try {
                const { status, providerId } = req.query;
                const filters = {};
                if (status && typeof status === 'string')
                    filters.status = status;
                if (providerId && !isNaN(Number(providerId)))
                    filters.providerId = Number(providerId);
                const demands = await this.service.getAll(filters);
                res.json(demands);
            }
            catch (error) {
                res.status(500).json({ message: 'Erro interno do servidor' });
            }
        };
    }
}
exports.DemandController = DemandController;
