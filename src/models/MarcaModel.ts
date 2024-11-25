import type { Modelo } from './ModeloModel'
import type { Veiculo } from './VeiculoModel'

export interface Marca {
  id: number
  nome: string
  modelos: Modelo[]
  veiculos: Veiculo[]
}
