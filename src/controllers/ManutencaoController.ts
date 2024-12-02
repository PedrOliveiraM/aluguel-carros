import { Request, Response } from 'express';
import { ManutencaoService } from '../service/ManutencaoService';

const manutencaoService = new ManutencaoService();

// Get all Manutencoes
export const getManutencoes = async (req: Request, res: Response) => {
  try {
    const manutencoes = await manutencaoService.getManutencoes();
    res.json(manutencoes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve manutencoes' });
  }
};

// Get a single Manutencao by ID
export const getManutencao = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const manutencao = await manutencaoService.getManutencao(Number(id));
    if (!manutencao) {
      return res.status(404).json({ error: 'Manutencao not found' });
    }
    res.json(manutencao);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve manutencao' });
  }
};

// Create a new Manutencao
export const createManutencao = async (req: Request, res: Response) => {
  try {
    const { descricao, dataManutencao, valorManutencao, veiculoId } = req.body;
    const manutencao = await manutencaoService.createManutencao({
      descricao,
      dataManutencao,
      valorManutencao,
      veiculoId: Number.parseInt(veiculoId),
    });
    res.status(201).json(manutencao);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create manutencao' });
  }
};

// Update an existing Manutencao
export const updateManutencao = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { descricao, dataManutencao, valorManutencao, veiculoId } = req.body;
    const manutencao = await manutencaoService.updateManutencao(Number(id), {
      descricao,
      dataManutencao,
      valorManutencao,
      veiculoId: veiculoId ? Number.parseInt(veiculoId) : undefined,
    });
    res.json(manutencao);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update manutencao' });
  }
};

// Delete a Manutencao
export const deleteManutencao = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await manutencaoService.deleteManutencao(Number(id));
    res.status(204).json({ message: 'Manutencao deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete manutencao' });
  }
};
