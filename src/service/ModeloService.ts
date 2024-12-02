import { prisma } from '../utils/prisma';

export class ModeloService {
  // Get all Modelos
  async getModelos() {
    return await prisma.modelo.findMany({
      include: {
        categoria: true,
        marca: true,
        veiculos: true,
      },
    });
  }

  // Get a single Modelo by ID
  async getModelo(id: number) {
    return await prisma.modelo.findUnique({
      where: { id },
      include: {
        categoria: true,
        marca: true,
        veiculos: true,
      },
    });
  }

  // Create a new Modelo
  async createModelo(data: {
    nome: string;
    anoModelo: string;
    qtModelo: number;
    categoriaId: number;
    marcaId: number;
  }) {
    return await prisma.modelo.create({
      data: {
        nome: data.nome,
        anoModelo: data.anoModelo,
        qtModelo: data.qtModelo,
        categoriaId: data.categoriaId,
        marcaId: data.marcaId,
      },
    });
  }

  // Update an existing Modelo
  async updateModelo(id: number, data: {
    nome: string;
    anoModelo: string;
    qtModelo: number;
    categoriaId: number;
    marcaId: number;
  }) {
    return await prisma.modelo.update({
      where: { id },
      data: {
        nome: data.nome,
        anoModelo: data.anoModelo,
        qtModelo: data.qtModelo,
        categoriaId: data.categoriaId,
        marcaId: data.marcaId,
      },
    });
  }

  // Delete a Modelo by ID
  async deleteModelo(id: number) {
    return await prisma.modelo.delete({
      where: { id },
    });
  }
}
