export interface ListUser {
  userId: string;
  namaNasabah: string;
  nomorRekening: string;
  jumlahPocket: number;
  id: string;
}

export interface ListDetailUser {
  id: string;
  userId: string;
  noRekening: string;
  nama: string;
  mpin: string;
  telepon: string;
  jenisTabungan: string;
  jenisKelamin: string;
  namaIbuKandung: string;
}

export interface User {
  id: string;
  userId: string;
  noRekening: string;
  nama: string;
  mpin: string;
  telepon: string;
  jenisTabungan: string;
  jenisKelamin: string;
  namaIbuKandung: string;
}

export interface GetListUserResponse {
  data: Array<ListUser>;
}

export interface GetListUserDetailResponse {
  data: Array<ListDetailUser>;
}

export interface GetUserDetailResponse {
  data: ListDetailUser;
}

export interface CreateUserResponse {
  data: '';
}
