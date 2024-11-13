import { ContratoLocacao } from "./ContratoLocacao";
import { Manutencao } from "./ManutencaoModel";
import { Marca } from "./MarcaModel";
import { Modelo } from "./ModeloModel";
import { Ocorrencia } from "./OcorrenciaModel";

export interface Veiculo {
    id: number;
    placa: string;
    chassi: string;
    anoFabricacao: Date;
    cor: string;
    status: string;
    marcaId: number;
    modeloId: number;
    marca: Marca;    
     modelo: Modelo; 
    manutencoes: Manutencao[];
    contratos: ContratoLocacao[]; 
    ocorrencias: Ocorrencia[]; 
  }
  