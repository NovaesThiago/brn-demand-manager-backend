"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderController = void 0;
const provider_service_1 = require("../services/provider.service");
const provider_schema_1 = require("../schemas/provider.schema"); // Import corrigido
class ProviderController {
    constructor() {
        this.service = new provider_service_1.ProviderService();
        this.getAll = async (req, res) => {
            try {
                const providers = await this.service.getAll();
                res.json(providers);
            }
            catch (error) {
                res.status(500).json({ message: 'Erro interno do servidor' });
            }
        };
        this.getById = async (req, res) => {
            try {
                const provider = await this.service.getById(Number(req.params.id));
                if (!provider) {
                    return res.status(404).json({ message: 'Provedor não encontrado' });
                }
                res.json(provider);
            }
            catch (error) {
                res.status(500).json({ message: 'Erro interno do servidor' });
            }
        };
        this.create = async (req, res) => {
            try {
                const validated = provider_schema_1.createProviderSchema.parse(req.body);
                const provider = await this.service.create(validated);
                res.status(201).json(provider);
            }
            catch (error) {
                res.status(400).json({ message: 'Dados inválidos', error });
            }
        };
        this.update = async (req, res) => {
            try {
                const validated = provider_schema_1.updateProviderSchema.parse(req.body);
                const provider = await this.service.update(Number(req.params.id), validated);
                if (!provider) {
                    return res.status(404).json({ message: 'Provedor não encontrado' });
                }
                res.json(provider);
            }
            catch (error) {
                res.status(400).json({ message: 'Dados inválidos', error });
            }
        };
        this.delete = async (req, res) => {
            try {
                const deleted = await this.service.delete(Number(req.params.id));
                if (!deleted) {
                    return res.status(404).json({ message: 'Provedor não encontrado' });
                }
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ message: 'Erro interno do servidor' });
            }
        };
    }
}
exports.ProviderController = ProviderController;
