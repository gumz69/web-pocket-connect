export interface transactionChart {
  jenisTransaksi: string;
  bulanTransaksi: number;
  tahunTransaksi: number;
  nominalTransaksi: number;
}

export interface transaction {
  idTransaksi: number;
  namaNasabah: string;
  noRekening: string;
  flag: string;
  waktuTransaksi: Date;
}

export interface GetTransactionChartResponse {
  data: Array<transactionChart>;
}

export interface GetListTransactionResponse {
  data: Array<transaction>;
}
