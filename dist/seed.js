"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
async function seed() {
    try {
        const provider = await prisma.provider.create({
            data: {
                name: 'Thiago Dev',
                email: 'thiago@example.com',
                // Adicione outros campos conforme seu schema
            },
        });
        console.log('✅ Provider criado:', provider);
    }
    catch (error) {
        console.error('❌ Erro ao inserir dados:', error);
    }
    finally {
        await prisma.$disconnect();
    }
}
seed();
