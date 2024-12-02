import { Request, Response } from 'express';
import { VeiculoService } from '../service/VeiculoService';

const veiculoService = new VeiculoService();

// Get all Veiculos
export const getVeiculos = async (req: Request, res: Response) => {
  try {
    const veiculos = await veiculoService.getVeiculos();
    res.status(200).json(veiculos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve veiculos' });
  }
};

// Get a single Veiculo
export const getVeiculo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const veiculo = await veiculoService.getVeiculo(Number(id));
    if (!veiculo) {
      return res.status(404).json({ error: 'Veiculo not found' });
    }
    res.status(200).json(veiculo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve veiculo' });
  }
};

// Create a new Veiculo
export const createVeiculo = async (req: Request, res: Response) => {
  try {
    const { placa, chassi, anoFabricacao, cor, modeloId } = req.body;
    const veiculo = await veiculoService.createVeiculo({
      placa,
      chassi,
      anoFabricacao,
      cor,
      modeloId: Number(modeloId),
    });
    res.status(201).json(veiculo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create veiculo' });
  }
};

// Update an existing Veiculo
export const updateVeiculo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { placa, chassi, anoFabricacao, cor, modeloId } = req.body;
    const veiculo = await veiculoService.updateVeiculo(Number(id), {
      placa,
      chassi,
      anoFabricacao,
      cor,
      modeloId: Number(modeloId),
    });
    res.status(200).json(veiculo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update veiculo' });
  }
};

// Delete a Veiculo
export const deleteVeiculo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await veiculoService.deleteVeiculo(Number(id));
    res.status(204).json({ message: 'Veiculo deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete veiculo' });
  }
};
