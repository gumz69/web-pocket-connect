import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListPocketResponse, Pocket } from './detail-pocket';
import { listPocketEndpoint } from '../../api/api';

@Injectable({
  providedIn: 'root',
})
export class DetailPocketService {
  constructor(private httpClient: HttpClient) {}
  token = localStorage.getItem('token');
  headers = new HttpHeaders({ Authorization: `Bearer ${this.token}` });
  getListPocket(): Observable<Array<Pocket>> {
    return new Observable((observer) => {
      this.httpClient
        .get<GetListPocketResponse>(`${listPocketEndpoint}`, {
          headers: this.headers,
        })
        .subscribe((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }

  getListPocketByTabungan(): Observable<Array<Pocket>> {
    return new Observable((observer) => {
      this.httpClient
        .get<GetListPocketResponse>(
          `${listPocketEndpoint}?tipe=Pocket%20Tabungan`,
          { headers: this.headers }
        )
        .subscribe((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }

  getListPocketByPengeluaran(): Observable<Array<Pocket>> {
    return new Observable((observer) => {
      this.httpClient
        .get<GetListPocketResponse>(
          `${listPocketEndpoint}?tipe=Pocket%20Pengeluaran`,
          { headers: this.headers }
        )
        .subscribe((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }
}
