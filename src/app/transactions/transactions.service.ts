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
<<<<<<< HEAD
        .get<GetTransactionChartResponse>(`${grafikTransactionEndpoint}`, {headers: this.headers})
=======
        .get<GetTransactionChartResponse>(`${grafikTransactionEndpoint}`, {headers})
>>>>>>> a2388c814b3970b88d92c9ad367aa23fe402f70f
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
<<<<<<< HEAD
        .get<GetListTransactionResponse>(`${topTransaksiDashboardEndpoint}`, {headers: this.headers})
=======
        .get<GetListTransactionResponse>(`${topTransaksiDashboardEndpoint}`, {headers})
>>>>>>> a2388c814b3970b88d92c9ad367aa23fe402f70f
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
<<<<<<< HEAD
        .get<GetListTransactionResponse>(`${transaksiListDashboardEndpoint}`, {headers: this.headers})
=======
        .get<GetListTransactionResponse>(`${transaksiListDashboardEndpoint}`, {headers})
>>>>>>> a2388c814b3970b88d92c9ad367aa23fe402f70f
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
<<<<<<< HEAD
        .get<GetListTransactionResponse>(`${transaksiListByDayDashboardEndpoint}`, {headers: this.headers})
=======
        .get<GetListTransactionResponse>(`${transaksiListByDayDashboardEndpoint}`, {headers})
>>>>>>> a2388c814b3970b88d92c9ad367aa23fe402f70f
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
<<<<<<< HEAD
        .get<GetListTransactionResponse>(`${transaksiListByWeekDashboardEndpoint}`, {headers: this.headers})
=======
        .get<GetListTransactionResponse>(`${transaksiListByWeekDashboardEndpoint}`, {headers})
>>>>>>> a2388c814b3970b88d92c9ad367aa23fe402f70f
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
<<<<<<< HEAD
        .get<GetListTransactionResponse>(`${transaksiListByMonthDashboardEndpoint}`, {headers: this.headers})
=======
        .get<GetListTransactionResponse>(`${transaksiListByMonthDashboardEndpoint}`, {headers})
>>>>>>> a2388c814b3970b88d92c9ad367aa23fe402f70f
        .subscribe(response => {
          observer.next(response.data);
          observer.complete();
        })
    })
  }

}
