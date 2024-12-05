import dotenv from 'dotenv';
import express from 'express';
import router from './routers/router';  // Certifique-se de que o caminho está correto
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

// Carregar variáveis de ambiente
dotenv.config();

// Configuração do Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Manutenção',
      version: '1.0.0',
      description: 'API para gerenciamento de veículos, categorias, manutenções, marcas, e modelos.',
    },
    servers: [
      {
        url: `${process.env.BASE_URL}/api`,
      },
    ],
  },
  apis: ['./src/routers/router.ts'],  // Alterado para refletir o caminho correto para o arquivo router.ts
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

const app = express();

// Definir a porta padrão
const PORTA = process.env.PORT || 3000;

// Middleware para JSON e Swagger
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas da API
app.use('/api', router);

// Iniciar servidor
app.listen(PORTA, () => {
  console.log(`Servidor em execução na porta: ${PORTA}`);
});
