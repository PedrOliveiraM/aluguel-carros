import { Request, Response } from 'express';
import { PagamentoService } from '../service/PagamentoService';

const pagamentoService = new PagamentoService();

// Create a Pagamento
export const createPagamento = async (req: Request, res: Response) => {
  try {
    const { data, valorPago, formaPagamento, contratoId } = req.body;
    const pagamento = await pagamentoService.createPagamento({
      data,
      valorPago,
      formaPagamento,
      contratoId: Number(contratoId),
    });
    res.status(201).json(pagamento);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create pagamento' });
  }
};

// Get all Pagamentos
export const getPagamentos = async (req: Request, res: Response) => {
  try {
    const pagamentos = await pagamentoService.getPagamentos();
    res.status(200).json(pagamentos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve pagamentos' });
  }
};

// Get single Pagamento
export const getPagamento = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const pagamento = await pagamentoService.getPagamento(Number(id));
    if (!pagamento) {
      return res.status(404).json({ error: 'Pagamento not found' });
    }
    res.status(200).json(pagamento);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve pagamento' });
  }
};

// Update Pagamento
export const updatePagamento = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { data, valorPago, formaPagamento, contratoId } = req.body;
    const pagamento = await pagamentoService.updatePagamento(Number(id), {
      data,
      valorPago,
      formaPagamento,
      contratoId: Number(contratoId),
    });
    res.status(200).json(pagamento);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update pagamento' });
  }
};

// Delete Pagamento
export const deletePagamento = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await pagamentoService.deletePagamento(Number(id));
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete pagamento' });
  }
};
