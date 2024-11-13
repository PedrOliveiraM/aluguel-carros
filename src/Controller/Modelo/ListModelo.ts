import {Request, Response } from 'express'
import { ModeloList } from "../../Services/Modelo/ListModelo"


class ListModeloController {
    async handle(req: Request, res: Response) {
        const { nome, valorLocacao, anoModelo } = req.query

        const modeloList = new ModeloList()

        try {
            const modelos = await modeloList.execute({
                nome: nome as string,
                valorLocacao: Number(valorLocacao),
                anoModelo: new Date(anoModelo as string)
            })

            return res.json(modelos)
        } catch (error) {
            return res.status(400).json({ error: (error as Error).message })
        }
    }

}

export { ListModeloController }