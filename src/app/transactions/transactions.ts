export interface transactionChart {
  jenisTransaksi: string;
  bulanTransaksi: number;
  tahunTransaksi: number;
  nominalTransaksi: number;
}

export interface GetTransactionChartResponse {
  data: Array<transactionChart>;
}
