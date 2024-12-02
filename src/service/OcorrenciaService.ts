import { prisma } from '../utils/prisma';

export class OcorrenciaService {
  // Get all Ocorrencias
  async getOcorrencias() {
    return await prisma.ocorrencia.findMany({
      include: {
        contrato: true,
      },
    });
  }

  // Get a single Ocorrencia by ID
  async getOcorrencia(id: number) {
    return await prisma.ocorrencia.findUnique({
      where: { id },
      include: {
        contrato: true,
      },
    });
  }

  // Create a new Ocorrencia
  async createOcorrencia(data: {
    descricao: string;
    dataOcorrencia: Date;
    valorOcorrencia: number;
    contratoId: number;
  }) {
    return await prisma.ocorrencia.create({
      data: {
        descricao: data.descricao,
        dataOcorrencia: data.dataOcorrencia,
        valorOcorrencia: data.valorOcorrencia,
        contratoId: data.contratoId,
      },
    });
  }

  // Update an existing Ocorrencia
  async updateOcorrencia(id: number, data: {
    descricao: string;
    dataOcorrencia: Date;
    valorOcorrencia: number;
    contratoId: number;
  }) {
    return await prisma.ocorrencia.update({
      where: { id },
      data: {
        descricao: data.descricao,
        dataOcorrencia: data.dataOcorrencia,
        valorOcorrencia: data.valorOcorrencia,
        contratoId: data.contratoId,
      },
    });
  }

  // Delete an Ocorrencia by ID
  async deleteOcorrencia(id: number) {
    return await prisma.ocorrencia.delete({
      where: { id },
    });
  }
}
