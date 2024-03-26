import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPocketChartResponse, PocketChart } from './grafik';
import { grafikPocketEndpoint } from '../../api/api';

@Injectable({
  providedIn: 'root',
})
export class GrafikService {
  constructor(private httpClient: HttpClient) {}
  token = localStorage.getItem('token');
  headers = new HttpHeaders({ Authorization: `Bearer ${this.token}` });
  getPocketChart(): Observable<Array<PocketChart>> {
    return new Observable((observer) => {
      this.httpClient
        .get<GetPocketChartResponse>(`${grafikPocketEndpoint}`, {
          headers: this.headers,
        })
        .subscribe((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }
}
