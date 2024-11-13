import type { Request, Response } from 'express';
import { MarcaCreate } from '../../Services/Marca/CreateMarca';

class CreateMarcaController {
  async handle(req: Request, res: Response) {
    const { nome } = req.body;

    const marcaCreate = new MarcaCreate();

    try {
      await marcaCreate.execute(nome as string);

      return res.status(201).send();
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
}
export { CreateMarcaController };
