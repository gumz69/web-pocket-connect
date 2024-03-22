export interface pocket{
  idPocket: number,
  tipe: string,
  nama: string,
  deskripsi: string,
  namaPembuat: string,
  tanggalDibuat: Date
}

export interface GetListPocketResponse{
  data: Array<pocket>
}
