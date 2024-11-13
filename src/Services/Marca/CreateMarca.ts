import { PrismaClient } from '@prisma/client';

class MarcaCreate {
  async execute(nome: string) {
    const prisma = new PrismaClient();

    try {
      const marca = await prisma.marca.create({
        data: {
          nome,
        },
      });

      return marca;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error));
    } finally {
      await prisma.$disconnect();
    }
  }
}

export { MarcaCreate };
