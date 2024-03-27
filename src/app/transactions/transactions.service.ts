import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetListTransactionResponse, GetTransactionChartResponse, transaction, transactionChart } from './transactions';
import { Observable } from 'rxjs';
import { grafikTransactionEndpoint, topTransaksiDashboardEndpoint, transaksiListByDayDashboardEndpoint, transaksiListByMonthDashboardEndpoint, transaksiListByWeekDashboardEndpoint, transaksiListDashboardEndpoint } from '../api/api';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient: HttpClient) { }
  token = localStorage.getItem('token');
  headers = new HttpHeaders({ Authorization: `Bearer ${this.token}` });
  getGrafikTransaction(): Observable<Array<transactionChart>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable(observer => {
      this.httpClient
        .get<GetTransactionChartResponse>(`${grafikTransactionEndpoint}`, {headers})
        .subscribe(response => {
          observer.next(response.data);
          observer.complete();
        })
    })
  }

  getListTopTransaction(): Observable<Array<transaction>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable(observer => {
      this.httpClient
        .get<GetListTransactionResponse>(`${topTransaksiDashboardEndpoint}`, {headers})
        .subscribe(response => {
          observer.next(response.data);
          observer.complete();
        })
    })
  }

  getListTransaction(): Observable<Array<transaction>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable(observer => {
      this.httpClient
        .get<GetListTransactionResponse>(`${transaksiListDashboardEndpoint}`, {headers})
        .subscribe(response => {
          observer.next(response.data);
          observer.complete();
        })
    })
  }

  getListTransactionByDay(): Observable<Array<transaction>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable(observer => {
      this.httpClient
        .get<GetListTransactionResponse>(`${transaksiListByDayDashboardEndpoint}`, {headers})
        .subscribe(response => {
          observer.next(response.data);
          observer.complete();
        })
    })
  }
  getListTransactionByWeek(): Observable<Array<transaction>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable(observer => {
      this.httpClient
        .get<GetListTransactionResponse>(`${transaksiListByWeekDashboardEndpoint}`, {headers})
        .subscribe(response => {
          observer.next(response.data);
          observer.complete();
        })
    })
  }
  getListTransactionByMonth(): Observable<Array<transaction>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable(observer => {
      this.httpClient
        .get<GetListTransactionResponse>(`${transaksiListByMonthDashboardEndpoint}`, {headers})
        .subscribe(response => {
          observer.next(response.data);
          observer.complete();
        })
    })
  }

}
