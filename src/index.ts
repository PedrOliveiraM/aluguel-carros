import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const prisma = new PrismaClient();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor executando na porta: ${PORT}`);
});
