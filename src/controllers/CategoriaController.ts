import { Request, Response } from 'express';
import { CategoriaService } from '../service/CategoriaService';
import { ManutencaoService } from '../service/ManutencaoService';

const categoriaService = new CategoriaService();
const manutencaoService = new ManutencaoService();

// Create Categoria
export const createCategoria = async (req: Request, res: Response) => {
  try {
    const { tipo, valorLocacao } = req.body;
    const categoria = await categoriaService.createCategoria({ tipo, valorLocacao });
    res.status(201).json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create categoria' });
  }
};

// Get all Categorias
export const getCategorias = async (req: Request, res: Response) => {
  try {
    const categorias = await categoriaService.getCategorias();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve categorias' });
  }
};

// Get single Categoria
export const getCategoria = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const categoria = await categoriaService.getCategoria(Number(id));
    if (categoria) {
      res.status(200).json(categoria);
    } else {
      res.status(404).json({ error: 'Categoria not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve categoria' });
  }
};

// Update Categoria
export const updateCategoria = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { tipo, valorLocacao } = req.body;
    const categoria = await categoriaService.updateCategoria(Number(id), {
      tipo,
      valorLocacao,
    });
    res.status(200).json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update categoria' });
  }
};

// Delete Categoria
export const deleteCategoria = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await categoriaService.deleteCategoria(Number(id));
    res.status(204).end();
  } catch (error) {
    console.log('ERRO ESTA AQUI: ' + error);
    res.status(500).json({ error: 'Failed to delete categoria' });
  }
};

// Create Manutencao
export const createManutencao = async (req: Request, res: Response) => {
  try {
    const { descricao, dataManutencao, valorManutencao, veiculoId } = req.body;
    const manutencao = await manutencaoService.createManutencao({ descricao, dataManutencao, valorManutencao, veiculoId });
    res.status(201).json(manutencao);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create manutencao' });
  }
};

// Get all Manutencoes
export const getManutencoes = async (req: Request, res: Response) => {
  try {
    const manutencoes = await manutencaoService.getManutencoes();
    res.status(200).json(manutencoes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve manutencoes' });
  }
};

// Get single Manutencao
export const getManutencao = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const manutencao = await manutencaoService.getManutencao(Number(id));
    if (manutencao) {
      res.status(200).json(manutencao);
    } else {
      res.status(404).json({ error: 'Manutencao not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve manutencao' });
  }
};

// Update Manutencao
export const updateManutencao = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { descricao, dataManutencao, valorManutencao, veiculoId } = req.body;
    const manutencao = await manutencaoService.updateManutencao(Number(id), { descricao, dataManutencao, valorManutencao, veiculoId });
    res.status(200).json(manutencao);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update manutencao' });
  }
};

// Delete Manutencao
export const deleteManutencao = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await manutencaoService.deleteManutencao(Number(id));
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete manutencao' });
  }
};
