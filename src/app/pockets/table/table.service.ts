import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listTopPocketEndpoint } from '../../api/api';
import { GetListPocketResponse, pocket } from '../detail-pocket/detail-pocket';

@Injectable({
  providedIn: 'root',
})
export class PocketService {
  constructor(private httpClient: HttpClient) {}

  getListTopPocket(): Observable<Array<pocket>> {
    return new Observable((observer) => {
      this.httpClient
        .get<GetListPocketResponse>(`${listTopPocketEndpoint}`)
        .subscribe((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }

}
