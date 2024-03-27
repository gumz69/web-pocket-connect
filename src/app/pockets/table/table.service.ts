import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listTopPocketEndpoint } from '../../api/api';
import { GetListPocketResponse, pocket } from '../detail-pocket/detail-pocket';

@Injectable({
  providedIn: 'root',
})
export class PocketService {
  constructor(private httpClient: HttpClient) {}
  token = localStorage.getItem('token');
  headers = new HttpHeaders({ Authorization: `Bearer ${this.token}` });
  getListTopPocket(): Observable<Array<pocket>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable((observer) => {
      this.httpClient
        .get<GetListPocketResponse>(`${listTopPocketEndpoint}`, {headers})
        .subscribe((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }

}
