import type { Request, Response } from 'express'
import redisClient from './redisConnection'

// Middleware de autenticação
export const authMiddleware = (
  handler: (req: Request, res: Response) => any
) => {
  return async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization || req.cookies['auth-token']

      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
      }

      // Verifica se o token existe no Redis
      const storedToken = await redisClient.get('authorization')

      if (token !== storedToken) {
        return res.status(401).json({ message: 'Invalid token' })
      }

      // Se a autenticação for bem-sucedida, chama o handler da rota
      return handler(req, res)
    } catch (error) {
      console.error('Erro na autenticação:', error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }
}
