import type { Request, Response } from 'express'
import { MarcaList } from '../../Services/Marca/ListMarca'

class ListMarcaController {
  async handle(req: Request, res: Response) {
    const marcaList = new MarcaList()

    try {
      const marcas = await marcaList.execute()

      return res.json(marcas)
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message })
    }
  }
}

export { ListMarcaController }
