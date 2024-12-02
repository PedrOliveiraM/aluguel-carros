import { prisma } from '../utils/prisma';

export class ContratoLocacaoService {
  // Get a single ContratoLocacao by ID
  async getContratoLocacao(id: number) {
    return await prisma.contratoLocacao.findUnique({
      where: { id },
      include: {
        veiculos: true,
        ocorrencias: true,
        pagamentos: true,
      },
    });
  }

  // Get all ContratoLocacoes
  async getContratoLocacoes() {
    return await prisma.contratoLocacao.findMany({
      include: {
        veiculos: true,
        ocorrencias: true,
        pagamentos: true,
      },
    });
  }

  // Create a new ContratoLocacao
  async createContratoLocacao(data: {
    dataLocacao: string;
    dataDevolucao: string;
    valorCaucao: number;
    valorTotal: number;
    status: string;
  }) {
    return await prisma.contratoLocacao.create({ data });
  }

  // Update an existing ContratoLocacao
  async updateContratoLocacao(
    id: number,
    data: {
      dataLocacao?: string;
      dataDevolucao?: string;
      valorCaucao?: number;
      valorTotal?: number;
      status?: string;
    }
  ) {
    return await prisma.contratoLocacao.update({
      where: { id },
      data,
    });
  }

  // Delete a ContratoLocacao by ID
  async deleteContratoLocacao(id: number) {
    return await prisma.contratoLocacao.delete({ where: { id } });
  }
}
