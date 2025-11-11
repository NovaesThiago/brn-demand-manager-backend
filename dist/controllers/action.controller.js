"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionController = exports.createProvider = void 0;
const action_service_1 = require("../services/action.service");
const action_schema_1 = require("../schemas/action.schema");
const actionService = new action_service_1.ActionService();
const createProvider = async (req, res, next) => {
    try {
        const validated = action_schema_1.createActionSchema.parse(req.body);
        const action = await actionService.create(validated);
        res.status(201).json(action);
    }
    catch (error) {
        next(error);
    }
};
exports.createProvider = createProvider;
class ActionController {
    constructor() {
        this.service = new action_service_1.ActionService();
        this.getAll = async (req, res) => {
            const actions = await this.service.getAll();
            res.json(actions);
        };
        this.getById = async (req, res) => {
            const action = await this.service.getById(Number(req.params.id));
            res.json(action);
        };
        this.create = async (req, res) => {
            const action = await this.service.create(req.body);
            res.status(201).json(action);
        };
        this.update = async (req, res) => {
            const action = await this.service.update(Number(req.params.id), req.body);
            res.json(action);
        };
        this.delete = async (req, res) => {
            await this.service.delete(Number(req.params.id));
            res.status(204).send();
        };
        this.getByDemand = async (req, res) => {
            const { demandId } = req.query;
            if (!demandId || typeof demandId !== 'string') {
                return res.status(400).json({ message: 'Parâmetro demandId é obrigatório e deve ser uma string' });
            }
            const actions = await this.service.getByDemand(demandId);
            res.json(actions);
        };
    }
}
exports.ActionController = ActionController;
