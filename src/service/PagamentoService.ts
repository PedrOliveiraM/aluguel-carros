import { prisma } from '../utils/prisma';

export class PagamentoService {
  // Create a new Pagamento
  async createPagamento(data: {
    data: Date;
    valorPago: number;
    formaPagamento: string;
    contratoId: number;
  }) {
    return await prisma.pagamento.create({
      data: {
        data: data.data,
        valorPago: data.valorPago,
        formaPagamento: data.formaPagamento,
        contratoId: data.contratoId,
      },
    });
  }

  // Get all Pagamentos
  async getPagamentos() {
    return await prisma.pagamento.findMany();
  }

  // Get a single Pagamento by ID
  async getPagamento(id: number) {
    return await prisma.pagamento.findUnique({
      where: { id },
    });
  }

  // Update an existing Pagamento
  async updatePagamento(id: number, data: {
    data: Date;
    valorPago: number;
    formaPagamento: string;
    contratoId: number;
  }) {
    return await prisma.pagamento.update({
      where: { id },
      data: {
        data: data.data,
        valorPago: data.valorPago,
        formaPagamento: data.formaPagamento,
        contratoId: data.contratoId,
      },
    });
  }

  // Delete a Pagamento by ID
  async deletePagamento(id: number) {
    return await prisma.pagamento.delete({
      where: { id },
    });
  }
}
