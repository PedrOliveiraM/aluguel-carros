import { prisma } from '../utils/prisma';

export class MarcaService {
  // Create a new Marca
  async createMarca(nome: string) {
    return await prisma.marca.create({ data: { nome } });
  }

  // Get all Marcas
  async getMarcas() {
    return await prisma.marca.findMany();
  }

  // Get a single Marca by ID
  async getMarca(id: number) {
    return await prisma.marca.findUnique({ where: { id } });
  }

  // Update an existing Marca
  async updateMarca(id: number, nome: string) {
    return await prisma.marca.update({
      where: { id },
      data: { nome },
    });
  }

  // Delete a Marca by ID
  async deleteMarca(id: number) {
    return await prisma.marca.delete({ where: { id } });
  }
}
