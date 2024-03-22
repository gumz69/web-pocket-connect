export interface ListUser{
    userId: string,
    namaNasabah: string,
    nomorRekening: string,
    jumlahPocket: number
}

export interface GetListUserResponse{
    data: Array<ListUser>;
}