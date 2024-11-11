import express from 'express'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'


dotenv.config()
const app = express()
const PORT = process.env.PORT
const prisma = new PrismaClient();

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Servidor executando na porta: ${PORT}`)
})


