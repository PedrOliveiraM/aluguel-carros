import type { Ocorrencia } from './OcorrenciaModel'
import type { Pagamento } from './PagamentoModel'
import type { Veiculo } from './VeiculoModel'

export interface ContratoLocacao {
  id: number
  dataLocacao: Date
  dataDevolucao: Date
  valorContrato: number
  valorTotal: number
  status: string
  veiculos: Veiculo[]
  ocorrencias: Ocorrencia[]
  pagamentos: Pagamento[]
}
