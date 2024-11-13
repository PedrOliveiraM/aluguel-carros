import {Request, Response } from 'express'
import { ModeloCreate } from '../../Services/Modelo/CreateModelo'

class CreateModeloController {
    async handle(req: Request, res: Response) {
        const { marca_id, nome, valorLocacao, anoModelo } = req.body

        const modeloCreate = new ModeloCreate()

        try {
            await modeloCreate.execute({
                marca_id: marca_id as string,
                nome: nome as string,
                valorLocacao: Number(valorLocacao),
                anoModelo: new Date(anoModelo as string)
            })

            return res.status(201).send()
        } catch (error) {
            return res.status(400).json({ error: (error as Error).message })
        }
    }

}

export { CreateModeloController }