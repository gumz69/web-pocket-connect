export interface Transaksi {
  nasabahId: number;
  pocketId: number;
  roles: string;
  saldoPocketPribadi: number;
}

export interface GetTransaksiResponse {
  data: Array<Transaksi>;
}

