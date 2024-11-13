import { ContratoLocacao } from "./ContratoLocacao";

export interface Pagamento {
    id: number;
    data: Date;
    valorPago: number;
    formaPagamento: string;
    contratoId: number;
    contrato: ContratoLocacao; 
  }