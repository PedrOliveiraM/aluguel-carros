import type { Request, Response } from 'express'
import { VeiculoService } from '../../Services/Veiculo/VeiculoService'

export class VeiculoController {
  private veiculoService: VeiculoService

  constructor() {
    this.veiculoService = new VeiculoService()
  }

  getAllVeiculos = async (req: Request, res: Response): Promise<void> => {
    try {
      const veiculos = await this.veiculoService.getAllVeiculos()
      res.status(200).json(veiculos)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar veículos.' })
    }
  }

  getVeiculoById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number.parseInt(req.params.id, 10)
      const veiculo = await this.veiculoService.getVeiculoById(id)
      if (!veiculo) {
        res.status(404).json({ error: 'Veículo não encontrado.' })
        return
      }
      res.status(200).json(veiculo)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar veículo.' })
    }
  }

  createVeiculo = async (req: Request, res: Response): Promise<void> => {
    try {
      const veiculo = await this.veiculoService.createVeiculo(req.body)
      res.status(201).json(veiculo)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar veículo.' })
    }
  }

  updateVeiculo = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number.parseInt(req.params.id, 10)
      const veiculo = await this.veiculoService.updateVeiculo(id, req.body)
      res.status(200).json(veiculo)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar veículo.' })
    }
  }

  deleteVeiculo = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number.parseInt(req.params.id, 10)
      await this.veiculoService.deleteVeiculo(id)
      res.status(204).send()
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar veículo.' })
    }
  }
}
