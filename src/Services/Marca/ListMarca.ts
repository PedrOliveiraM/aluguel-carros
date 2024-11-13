import { PrismaClient } from '@prisma/client';

class MarcaList {
  async execute() {
    const prisma = new PrismaClient();

    try {
      const marcas = await prisma.marca.findMany();

      return marcas;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error));
    } finally {
      await prisma.$disconnect();
    }
  }
}

export { MarcaList };
