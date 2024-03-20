import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetTransactionChartResponse, transactionChart } from './transactions';
import { Observable } from 'rxjs';
import { grafikTransactionEndpoint } from '../api/api';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient: HttpClient) { }

  getGrafikTransaction(): Observable<Array<transactionChart>> {
    return new Observable(observer => {
      this.httpClient
        .get<GetTransactionChartResponse>(`${grafikTransactionEndpoint}`)
        .subscribe(response => {
          console.log({response});
          observer.next(response.data);
          observer.complete();
        })
    })
  }
}
