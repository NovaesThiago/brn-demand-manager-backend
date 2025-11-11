"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const error_middleware_1 = require("./middlewares/error.middleware");
const provider_routes_1 = __importDefault(require("./routes/provider.routes"));
const demand_routes_1 = __importDefault(require("./routes/demand.routes"));
const action_routes_1 = __importDefault(require("./routes/action.routes"));
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(error_middleware_1.errorHandler);
app.use('/providers', provider_routes_1.default);
app.use('/demands', demand_routes_1.default);
app.use('/actions', action_routes_1.default);
app.get('/provedores', async (req, res) => {
    const provedores = await prisma.provider.findMany();
    res.json(provedores);
});
app.post('/provedores', async (req, res) => {
    const { name, email } = req.body;
    const novo = await prisma.provider.create({
        data: { name, email },
    });
    res.json(novo);
});
// Você pode seguir com rotas para demandas e ações técnicas aqui
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
