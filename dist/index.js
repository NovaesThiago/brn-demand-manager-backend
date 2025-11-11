"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const provider_routes_1 = __importDefault(require("./routes/provider.routes"));
const demand_routes_1 = __importDefault(require("./routes/demand.routes"));
const action_routes_1 = __importDefault(require("./routes/action.routes"));
const swagger_1 = require("./config/swagger");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/providers', provider_routes_1.default);
app.use('/demands', demand_routes_1.default);
app.use('/actions', action_routes_1.default);
(0, swagger_1.setupSwagger)(app);
app.get('/', (req, res) => {
    res.send('Servidor BRN Demand Manager rodando!');
});
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
