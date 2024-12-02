import { prisma } from '../utils/prisma'

export class CategoriaService {
  // Create a new Categoria
  async createCategoria(data: { tipo: string; valorLocacao: number }) {
    return await prisma.categoria.create({ data });
  }

  // Get all Categorias
  async getCategorias() {
    return await prisma.categoria.findMany();
  }

  // Get a single Categoria by ID
  async getCategoria(id: number) {
    return await prisma.categoria.findUnique({
      where: { id },
    });
  }

  // Update a Categoria
  async updateCategoria(
    id: number,
    data: { tipo: string; valorLocacao: number }
  ) {
    return await prisma.categoria.update({
      where: { id },
      data,
    });
  }

  // Delete a Categoria
  async deleteCategoria(id: number) {
    return await prisma.categoria.delete({
      where: { id },
    });
  }
}
