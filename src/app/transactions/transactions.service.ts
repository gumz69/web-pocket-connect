import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetListTransactionResponse, GetTransactionChartResponse, transaction, transactionChart } from './transactions';
import { Observable } from 'rxjs';
import { grafikTransactionEndpoint, topTransaksiDashboardEndpoint, transaksiListByDayDashboardEndpoint, transaksiListByMonthDashboardEndpoint, transaksiListByWeekDashboardEndpoint, transaksiListDashboardEndpoint } from '../api/api';

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
          observer.next(response.data);
          observer.complete();
        })
    })
  }

  getListTopTransaction(): Observable<Array<transaction>> {
    return new Observable(observer => {
      this.httpClient
        .get<GetListTransactionResponse>(`${topTransaksiDashboardEndpoint}`)
        .subscribe(response => {
          observer.next(response.data);
          observer.complete();
        })
    })
  }

  getListTransaction(): Observable<Array<transaction>> {
    return new Observable(observer => {
      this.httpClient
        .get<GetListTransactionResponse>(`${transaksiListDashboardEndpoint}`)
        .subscribe(response => {
          console.log({response});
          observer.next(response.data);
          observer.complete();
        })
    })
  }

  getListTransactionByDay(): Observable<Array<transaction>> {
    return new Observable(observer => {
      this.httpClient
        .get<GetListTransactionResponse>(`${transaksiListByDayDashboardEndpoint}`)
        .subscribe(response => {
          console.log({response});
          observer.next(response.data);
          observer.complete();
        })
    })
  }
  getListTransactionByWeek(): Observable<Array<transaction>> {
    return new Observable(observer => {
      this.httpClient
        .get<GetListTransactionResponse>(`${transaksiListByWeekDashboardEndpoint}`)
        .subscribe(response => {
          console.log({response});
          observer.next(response.data);
          observer.complete();
        })
    })
  }
  getListTransactionByMonth(): Observable<Array<transaction>> {
    return new Observable(observer => {
      this.httpClient
        .get<GetListTransactionResponse>(`${transaksiListByMonthDashboardEndpoint}`)
        .subscribe(response => {
          console.log({response});
          observer.next(response.data);
          observer.complete();
        })
    })
  }

}
