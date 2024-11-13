import { Ocorrencia } from "./OcorrenciaModel";
import { Pagamento } from "./PagamentoModel";
import { Veiculo } from "./VeiculoModel";

export interface ContratoLocacao {
    id: number;
    dataLocacao: Date;
    dataDevolucao: Date;
    valorContrato: number;
    valorTotal: number;
    status: string;
    veiculos: Veiculo[];  
    ocorrencias: Ocorrencia[];
    pagamentos: Pagamento[];  }