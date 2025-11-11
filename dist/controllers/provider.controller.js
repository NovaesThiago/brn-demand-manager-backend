"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderController = exports.createProvider = void 0;
const provider_service_1 = require("../services/provider.service");
const provider_schema_1 = require("../schemas/provider.schema");
const providerService = new provider_service_1.ProviderService();
const createProvider = async (req, res, next) => {
    try {
        const validated = provider_schema_1.createProviderSchema.parse(req.body);
        const provider = await providerService.create(validated);
        res.status(201).json(provider);
    }
    catch (error) {
        next(error);
    }
};
exports.createProvider = createProvider;
class ProviderController {
    constructor() {
        this.service = new provider_service_1.ProviderService();
        this.getAll = async (req, res) => {
            const providers = await this.service.getAll();
            res.json(providers);
        };
        this.getById = async (req, res) => {
            const provider = await this.service.getById(Number(req.params.id));
            res.json(provider);
        };
        this.create = async (req, res) => {
            const provider = await this.service.create(req.body);
            res.status(201).json(provider);
        };
        this.update = async (req, res) => {
            const provider = await this.service.update(Number(req.params.id), req.body);
            res.json(provider);
        };
        this.delete = async (req, res) => {
            await this.service.delete(Number(req.params.id));
            res.status(204).send();
        };
    }
}
exports.ProviderController = ProviderController;
