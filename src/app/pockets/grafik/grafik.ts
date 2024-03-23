export interface PocketChart {
    bulanPembuatan: number,
    tahunPembuatan: number,
    jumlahPocket: number
}

export interface GetPocketChartResponse {
    data: Array<PocketChart>;
  }