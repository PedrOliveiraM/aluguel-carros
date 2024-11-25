import type { Veiculo } from './VeiculoModel'

export interface Manutencao {
  id: number
  descricao: string
  dataManutencao: Date
  valorManutencao: number
  veiculoId: number
  veiculo: Veiculo
}
