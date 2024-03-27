export interface TransactionChart {
  jenisTransaksi: string;
  bulanTransaksi: number;
  tahunTransaksi: number;
  nominalTransaksi: number;
}

export interface Transaction {
  idTransaksi: number;
  namaNasabah: string;
  noRekening: string;
  flag: string;
  waktuTransaksi: string;
}

export interface GetTransactionChartResponse {
  data: Array<TransactionChart>;
}

export interface GetListTransactionResponse {
  data: Array<Transaction>;
}
