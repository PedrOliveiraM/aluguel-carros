import { Request, Response } from 'express';
import { ContratoLocacaoService } from '../service/ContratoLocacaoService';

const contratoLocacaoService = new ContratoLocacaoService();

// Get a single ContratoLocacao
export const getContratoLocacao = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const contratoLocacao = await contratoLocacaoService.getContratoLocacao(Number(id));
    if (!contratoLocacao) {
      return res.status(404).json({ error: 'ContratoLocacao not found' });
    }
    res.json(contratoLocacao);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve contratoLocacao' });
  }
};

// Get all ContratoLocacoes
export const getContratoLocacoes = async (req: Request, res: Response) => {
  try {
    const contratoLocacoes = await contratoLocacaoService.getContratoLocacoes();
    res.json(contratoLocacoes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve contratoLocacoes' });
  }
};

// Create a new ContratoLocacao
export const createContratoLocacao = async (req: Request, res: Response) => {
  try {
    const { dataLocacao, dataDevolucao, valorCaucao, valorTotal, status } = req.body;
    const contratoLocacao = await contratoLocacaoService.createContratoLocacao({
      dataLocacao,
      dataDevolucao,
      valorCaucao,
      valorTotal,
      status,
    });
    res.status(201).json(contratoLocacao);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create contratoLocacao' });
  }
};

// Update an existing ContratoLocacao
export const updateContratoLocacao = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { dataLocacao, dataDevolucao, valorCaucao, valorTotal, status } = req.body;
    const contratoLocacao = await contratoLocacaoService.updateContratoLocacao(Number(id), {
      dataLocacao,
      dataDevolucao,
      valorCaucao,
      valorTotal,
      status,
    });
    res.json(contratoLocacao);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update contratoLocacao' });
  }
};

// Delete a ContratoLocacao
export const deleteContratoLocacao = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await contratoLocacaoService.deleteContratoLocacao(Number(id));
    res.status(204).json({ message: 'ContratoLocacao deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete contratoLocacao' });
  }
};
