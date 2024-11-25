import type { Marca } from './MarcaModel'

export interface Modelo {
  id: number
  nome: string
  anoModelo: Date
  valorLocacao: number
  marca: Marca
  marcaId: number
  //veiculos:     Veiculo[]
}
