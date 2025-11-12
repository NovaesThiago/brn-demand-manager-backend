"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionController = exports.createAction = void 0;
const action_service_1 = require("../services/action.service");
const action_schema_1 = require("../schemas/action.schema");
const actionService = new action_service_1.ActionService();
const createAction = async (req, res, next) => {
    try {
        const validated = action_schema_1.createActionSchema.parse(req.body);
        const action = await actionService.create(validated);
        res.status(201).json(action);
    }
    catch (error) {
        next(error);
    }
};
exports.createAction = createAction;
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
            try {
                const { demandId } = req.query;
                if (!demandId) {
                    return res.status(400).json({
                        message: 'Parâmetro demandId é obrigatório'
                    });
                }
                // ✅ Converter para número e validar
                const demandIdNumber = Number(demandId);
                if (isNaN(demandIdNumber)) {
                    return res.status(400).json({
                        message: 'demandId deve ser um número válido'
                    });
                }
                const actions = await this.service.getByDemand(demandIdNumber);
                res.json(actions);
            }
            catch (error) {
                res.status(500).json({ message: 'Erro interno do servidor' });
            }
        };
    }
}
exports.ActionController = ActionController;
