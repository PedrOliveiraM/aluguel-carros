import { Request, Response } from 'express';
import { ModeloService } from '../service/ModeloService';

const modeloService = new ModeloService();

// Get all Modelos
export const getModelos = async (req: Request, res: Response) => {
  try {
    const modelos = await modeloService.getModelos();
    res.json(modelos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve modelos' });
  }
};

// Get single Modelo
export const getModelo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const modelo = await modeloService.getModelo(Number(id));
    if (!modelo) {
      return res.status(404).json({ error: 'Modelo not found' });
    }
    res.json(modelo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve modelo' });
  }
};

// Create Modelo
export const createModelo = async (req: Request, res: Response) => {
  try {
    const { nome, anoModelo, qtModelo, categoriaId, marcaId } = req.body;
    const modelo = await modeloService.createModelo({
      nome,
      anoModelo,
      qtModelo,
      categoriaId: Number(categoriaId),
      marcaId: Number(marcaId),
    });
    res.status(201).json(modelo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create modelo' });
  }
};

// Update Modelo
export const updateModelo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome, anoModelo, qtModelo, categoriaId, marcaId } = req.body;
    const modelo = await modeloService.updateModelo(Number(id), {
      nome,
      anoModelo,
      qtModelo,
      categoriaId: Number(categoriaId),
      marcaId: Number(marcaId),
    });
    res.json(modelo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update modelo' });
  }
};

// Delete Modelo
export const deleteModelo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await modeloService.deleteModelo(Number(id));
    res.status(204).json({ message: 'Modelo deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete modelo' });
  }
};
