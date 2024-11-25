import type { ContratoLocacao } from './ContratoLocacao'
import type { Manutencao } from './ManutencaoModel'
import type { Marca } from './MarcaModel'
import type { Modelo } from './ModeloModel'
import type { Ocorrencia } from './OcorrenciaModel'

export interface Veiculo {
  id: number
  placa: string
  chassi: string
  anoFabricacao: Date
  cor: string
  status: string
  marcaId: number
  modeloId: number
  marca: Marca
  modelo: Modelo
  manutencoes: Manutencao[]
  contratos: ContratoLocacao[]
  ocorrencias: Ocorrencia[]
}
