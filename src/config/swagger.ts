const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BRN Demand Manager API',
      version: '1.0.0',
      description: `Sistema interno para gestão centralizada de demandas técnicas de provedores de internet.
  
      **Funcionalidades principais:**
      - Cadastro de provedores atendidos
      - Registro de demandas técnicas (Diagnóstico, Manutenção, Configuração, etc.)
      - Acompanhamento de status e histórico de ações
      - Filtros por status e provedor

      **Cenário:** Consultoria especializada em redes que oferece suporte técnico para diversos ISPs.`,
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de Desenvolvimento'
      },
    ],
    tags: [  // ✅ ADICIONAR TAGS PARA ORGANIZAÇÃO
      {
        name: 'Providers',
        description: 'Operações relacionadas a provedores'
      },
      {
        name: 'Demands', 
        description: 'Operações relacionadas a demandas técnicas'
      },
      {
        name: 'Actions',
        description: 'Operações relacionadas a ações técnicas'
      }
    ],
  },
  apis: ['./src/routes/*.ts'],
};