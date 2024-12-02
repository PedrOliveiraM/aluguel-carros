import { prisma } from '../utils/prisma'

import { Request, Response } from 'express'

export const getOcorrencias = async (req: Request, res: Response) => {
  try {
    const ocorrencias = await prisma.ocorrencia.findMany({
      include: {
        contrato: true,
      },
    })
    res.status(200).json(ocorrencias)
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve ocorrencias' })
  }
}

export const getOcorrencia = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const ocorrencia = await prisma.ocorrencia.findUnique({
      where: { id: Number.parseInt(id) },
      include: {
        contrato: true,
      },
    })
    if (ocorrencia) {
      res.status(200).json(ocorrencia)
    } else {
      res.status(404).json({ error: 'Ocorrencia not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve ocorrencia' })
  }
}

export const createOcorrencia = async (req: Request, res: Response) => {
  try {
    const { descricao, dataOcorrencia, valorOcorrencia, contratoId } = req.body
    const ocorrencia = await prisma.ocorrencia.create({
      data: {
        descricao,
        dataOcorrencia,
        valorOcorrencia,
        contratoId: Number.parseInt(contratoId),
      },
    })
    res.status(201).json(ocorrencia)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create ocorrencia' })
  }
}

export const updateOcorrencia = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { descricao, dataOcorrencia, valorOcorrencia, contratoId } = req.body
    const ocorrencia = await prisma.ocorrencia.update({
      where: { id: Number.parseInt(id) },
      data: {
        descricao,
        dataOcorrencia,
        valorOcorrencia,
        contratoId: Number.parseInt(contratoId),
      },
    })
    res.json(ocorrencia)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update ocorrencia' })
  }
}

export const deleteOcorrencia = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await prisma.ocorrencia.delete({
      where: { id: Number.parseInt(id) },
    })
    res.status(204).json({ message: 'Ocorrencia deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete ocorrencia' })
  }
}