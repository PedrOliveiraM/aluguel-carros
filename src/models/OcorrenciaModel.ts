import type { ContratoLocacao } from './ContratoLocacao'
import type { Veiculo } from './VeiculoModel'

export interface Ocorrencia {
  id: number
  descricao: string
  dataOcorrencia: Date
  valorOcorrencia: number
  veiculoId: number
  veiculo: Veiculo // Relacionamento com Veiculo
  contratos: ContratoLocacao[] // Relacionamento com ContratoLocacao (array)
}
