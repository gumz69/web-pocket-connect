import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListPocketResponse, pocket } from './detail-pocket';
import { listPocketEndpoint } from '../../api/api';

@Injectable({
  providedIn: 'root',
})
export class DetailPocketService {
  constructor(private httpClient: HttpClient) {}
  token = localStorage.getItem('token');
  headers = new HttpHeaders({ Authorization: `Bearer ${this.token}` });
  getListPocket(): Observable<Array<pocket>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable((observer) => {
      this.httpClient
<<<<<<< HEAD
        .get<GetListPocketResponse>(`${listPocketEndpoint}`, {headers: this.headers})
=======
        .get<GetListPocketResponse>(`${listPocketEndpoint}`, {headers})
>>>>>>> a2388c814b3970b88d92c9ad367aa23fe402f70f
        .subscribe((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }

  getListPocketByTabungan(): Observable<Array<pocket>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable((observer) => {
      this.httpClient
<<<<<<< HEAD
        .get<GetListPocketResponse>(`${listPocketEndpoint}?tipe=Pocket%20Tabungan`, {headers: this.headers})
=======
        .get<GetListPocketResponse>(`${listPocketEndpoint}?tipe=Pocket%20Tabungan`, {headers})
>>>>>>> a2388c814b3970b88d92c9ad367aa23fe402f70f
        .subscribe((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }

  getListPocketByPengeluaran(): Observable<Array<pocket>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable((observer) => {
      this.httpClient
<<<<<<< HEAD
        .get<GetListPocketResponse>(`${listPocketEndpoint}?tipe=Pocket%20Pengeluaran`, {headers: this.headers})
=======
        .get<GetListPocketResponse>(`${listPocketEndpoint}?tipe=Pocket%20Pengeluaran`, {headers})
>>>>>>> a2388c814b3970b88d92c9ad367aa23fe402f70f
        .subscribe((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }
}
