import { prisma } from '../utils/prisma';

export class ManutencaoService {
  // Get all Manutencoes
  async getManutencoes() {
    return await prisma.manutencao.findMany({
      include: {
        veiculo: true,
      },
    });
  }

  // Get a single Manutencao by ID
  async getManutencao(id: number) {
    return await prisma.manutencao.findUnique({
      where: { id },
      include: {
        veiculo: true,
      },
    });
  }

  // Create a new Manutencao
  async createManutencao(data: {
    descricao: string;
    dataManutencao: string;
    valorManutencao: number;
    veiculoId: number;
  }) {
    return await prisma.manutencao.create({ data });
  }

  // Update an existing Manutencao
  async updateManutencao(
    id: number,
    data: {
      descricao?: string;
      dataManutencao?: string;
      valorManutencao?: number;
      veiculoId?: number;
    }
  ) {
    return await prisma.manutencao.update({
      where: { id },
      data,
    });
  }

  // Delete a Manutencao by ID
  async deleteManutencao(id: number) {
    return await prisma.manutencao.delete({ where: { id } });
  }
}
