"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = setupSwagger;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'BRN Demand Manager API',
            version: '1.0.0',
            description: 'Documentação da API para gerenciamento de demandas e ações',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/routes/*.ts'],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
function setupSwagger(app) {
    app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
}
