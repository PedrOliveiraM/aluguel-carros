import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import redisClient from '../../Lib/redisConnection';

// Serviço de autenticação
export const loginService = async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
  try {
    const { email, senha } = req.body;

    // Verifica se os campos estão preenchidos
    if (!email || !senha) {
      return res.status(400).json({ message: 'Email e senha são obrigatórios' });
    }

    // Busca o usuário no banco de dados
    const user = await prisma.usuario.findUnique({
      where: { email },
    });

    // Se o usuário não for encontrado ou a senha estiver incorreta
    if (!user || !(await bcrypt.compare(senha, user.senha))) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Gera um token UUID
    const token = uuidv4();

    // Armazena o token no Redis com expiração de 1 hora
    await redisClient.setEx(`authToken:${token}`, 3600, email); // Expira em 3600 segundos (1 hora)

    // Retorna o token como resposta
    return res.status(200).json({ token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};
