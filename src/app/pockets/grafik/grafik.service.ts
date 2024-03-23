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

  getPocketChart(): Observable<Array<PocketChart>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable((observer) => {
      this.httpClient
        .get<GetPocketChartResponse>(`${grafikPocketEndpoint}`, {headers})
        .subscribe((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }

}
