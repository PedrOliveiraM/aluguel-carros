import { Marca } from "./MarcaModel";

export interface Modelo {
  id: Number;
  nome: String;
  anoModelo: Date;
  valorLocacao: Number;
  marca: Marca;
  marcaId: Number;
  //veiculos:     Veiculo[]
}
