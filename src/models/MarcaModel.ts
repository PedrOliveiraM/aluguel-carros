import { Modelo } from "./ModeloModel"
import { Veiculo } from "./VeiculoModel"

export interface Marca {
    id: number
    nome: string
    modelos: Modelo[]
    veiculos:  Veiculo[]
}