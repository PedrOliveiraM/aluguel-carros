import { PrismaClient } from '@prisma/client';

interface IModelo {
  nome: string;
  marca_id: string;
  anoModelo: Date;
  valorLocacao: number;
}

class ModeloCreate {
  async execute({ nome, marca_id, anoModelo, valorLocacao }: IModelo) {
    const prisma = new PrismaClient();

    try {
      const modelo = await prisma.modelo.create({
        data: {
          nome,
          marca_id,
          anoModelo,
          valorLocacao,
        },
      });

      return modelo;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error));
    } finally {
      await prisma.$disconnect();
    }
  }
}
export { ModeloCreate };
