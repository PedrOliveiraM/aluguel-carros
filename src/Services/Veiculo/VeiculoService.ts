import { PrismaClient } from '@prisma/client'
import type { Veiculo } from '../../models/VeiculoModel'

export class VeiculoService {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async getAllVeiculos(): Promise<Veiculo[]> {
    return await this.prisma.veiculo.findMany({
      include: {
        marca: true,
        modelo: true,
        manutencoes: true,
        contratos: true,
        ocorrencias: true,
      },
    })
  }

  async getVeiculoById(id: number): Promise<Veiculo | null> {
    return await this.prisma.veiculo.findUnique({
      where: { id },
      include: {
        marca: true,
        modelo: true,
        manutencoes: true,
        contratos: true,
        ocorrencias: true,
      },
    })
  }

  async createVeiculo(data: Partial<Veiculo>): Promise<Veiculo> {
    return await this.prisma.veiculo.create({
      data: {
        ...data,
        marca: { connect: { id: data.marcaId } },
        modelo: { connect: { id: data.modeloId } },
      },
    })
  }

  async updateVeiculo(id: number, data: Partial<Veiculo>): Promise<Veiculo> {
    return await this.prisma.veiculo.update({
      where: { id },
      data: {
        ...data,
        marca: data.marcaId ? { connect: { id: data.marcaId } } : undefined,
        modelo: data.modeloId ? { connect: { id: data.modeloId } } : undefined,
      },
    })
  }

  async deleteVeiculo(id: number): Promise<void> {
    await this.prisma.veiculo.delete({
      where: { id },
    })
  }
}
