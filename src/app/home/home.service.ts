import axios from 'axios';
import { Injectable } from '@angular/core';
import { GetTransaksiResponse, Transaksi } from './home';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { topTransaksiListEndpoint } from '../api/api';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http: HttpClient) {}
  getTopTransaksi(): Observable<Array<Transaksi>> {
    return new Observable((observer) => {
      this._http
        .get<GetTransaksiResponse>(topTransaksiListEndpoint)
        .subscribe((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }
}
