import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListPocketResponse, pocket } from './detail-pocket';
import { listPocketEndpoint } from '../../api/api';

@Injectable({
  providedIn: 'root',
})
export class DetailPocketService {
  constructor(private httpClient: HttpClient) {}

  getListPocket(): Observable<Array<pocket>> {
    return new Observable((observer) => {
      this.httpClient
        .get<GetListPocketResponse>(`${listPocketEndpoint}`)
        .subscribe((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }

  getListPocketByTabungan(): Observable<Array<pocket>> {
    return new Observable((observer) => {
      this.httpClient
        .get<GetListPocketResponse>(`${listPocketEndpoint}?tipe=Pocket%20Tabungan`)
        .subscribe((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }

  getListPocketByPengeluaran(): Observable<Array<pocket>> {
    return new Observable((observer) => {
      this.httpClient
        .get<GetListPocketResponse>(`${listPocketEndpoint}?tipe=Pocket%20Pengeluaran`)
        .subscribe((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }
}
