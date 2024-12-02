import { Request, Response } from 'express';
import { OcorrenciaService } from '../service/OcorrenciaService';

const ocorrenciaService = new OcorrenciaService();

// Get all Ocorrencias
export const getOcorrencias = async (req: Request, res: Response) => {
  try {
    const ocorrencias = await ocorrenciaService.getOcorrencias();
    res.status(200).json(ocorrencias);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve ocorrencias' });
  }
};

// Get single Ocorrencia
export const getOcorrencia = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const ocorrencia = await ocorrenciaService.getOcorrencia(Number(id));
    if (!ocorrencia) {
      return res.status(404).json({ error: 'Ocorrencia not found' });
    }
    res.status(200).json(ocorrencia);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve ocorrencia' });
  }
};

// Create Ocorrencia
export const createOcorrencia = async (req: Request, res: Response) => {
  try {
    const { descricao, dataOcorrencia, valorOcorrencia, contratoId } = req.body;
    const ocorrencia = await ocorrenciaService.createOcorrencia({
      descricao,
      dataOcorrencia,
      valorOcorrencia,
      contratoId: Number(contratoId),
    });
    res.status(201).json(ocorrencia);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create ocorrencia' });
  }
};

// Update Ocorrencia
export const updateOcorrencia = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { descricao, dataOcorrencia, valorOcorrencia, contratoId } = req.body;
    const ocorrencia = await ocorrenciaService.updateOcorrencia(Number(id), {
      descricao,
      dataOcorrencia,
      valorOcorrencia,
      contratoId: Number(contratoId),
    });
    res.json(ocorrencia);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update ocorrencia' });
  }
};

// Delete Ocorrencia
export const deleteOcorrencia = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await ocorrenciaService.deleteOcorrencia(Number(id));
    res.status(204).json({ message: 'Ocorrencia deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete ocorrencia' });
  }
};
