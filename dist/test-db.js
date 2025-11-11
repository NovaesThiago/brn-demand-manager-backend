"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
async function testConnection() {
    try {
        await prisma.$connect();
        console.log('✅ Conectado ao banco com sucesso!');
        const providers = await prisma.provider.findMany();
        console.log(`🔍 ${providers.length} providers encontrados.`);
    }
    catch (error) {
        console.error('❌ Erro ao conectar ao banco:', error);
    }
    finally {
        await prisma.$disconnect();
    }
}
testConnection();
