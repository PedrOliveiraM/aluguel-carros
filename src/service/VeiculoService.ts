import { prisma } from '../utils/prisma';

export class VeiculoService {
  // Get all Veiculos
  async getVeiculos() {
    return await prisma.veiculo.findMany();
  }

  // Get a single Veiculo by ID
  async getVeiculo(id: number) {
    return await prisma.veiculo.findUnique({
      where: { id },
    });
  }

  // Create a new Veiculo
  async createVeiculo(data: {
    placa: string;
    chassi: string;
    anoFabricacao: string;
    cor: string;
    modeloId: number;
  }) {
    return await prisma.veiculo.create({
      data: {
        placa: data.placa,
        chassi: data.chassi,
        anoFabricacao: data.anoFabricacao,
        cor: data.cor,
        modeloId: data.modeloId,
        status: 'disponível', // or another default value
      },
    });
  }

  // Update an existing Veiculo
  async updateVeiculo(id: number, data: {
    placa: string;
    chassi: string;
    anoFabricacao: string;
    cor: string;
    modeloId: number;
  }) {
    return await prisma.veiculo.update({
      where: { id },
      data: {
        placa: data.placa,
        chassi: data.chassi,
        anoFabricacao: data.anoFabricacao,
        cor: data.cor,
        modeloId: data.modeloId,
      },
    });
  }

  // Delete a Veiculo by ID
  async deleteVeiculo(id: number) {
    return await prisma.veiculo.delete({
      where: { id },
    });
  }
}
