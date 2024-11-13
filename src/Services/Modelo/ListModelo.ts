import { PrismaClient } from '@prisma/client';

interface IMarca {
  nome?: string;
  valorLocacao?: number;
  anoModelo?: Date;
}

class ModeloList {
  async execute({ nome, valorLocacao, anoModelo }: IMarca) {
    const prisma = new PrismaClient();

    try {
      const modelos = await prisma.modelo.findMany({
        where: {
          ...(nome && { nome: { contains: nome } }),
          ...(valorLocacao && { valorLocacao: valorLocacao }),
          ...(anoModelo && { anoModelo: anoModelo }),
        },
      });

      return modelos;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error));
    } finally {
      await prisma.$disconnect();
    }
  }
}

export { ModeloList };
