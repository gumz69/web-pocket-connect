import { Injectable} from '@angular/core';
import { categoryPocketEndpoint, typePocketEndpoint } from '../api/api';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoryPocket, GetTypePocketResponse, TypePocket, getCategoryPocketResponse } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) { }
  token = localStorage.getItem('token');
  headers = new HttpHeaders({ Authorization: `Bearer ${this.token}` });
  getTypePocket(): Observable<Array<TypePocket>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable(observer => {
      this.httpClient
        .get<GetTypePocketResponse>(`${typePocketEndpoint}`, {headers})
        .subscribe(response => {
          observer.next(response.data);
          observer.complete();
        })
    })
  }

  getCategoryPocket(tipe: string): Observable<Array<CategoryPocket>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable(observer => {
      this.httpClient
        .get<getCategoryPocketResponse>(`${categoryPocketEndpoint}?tipe=${tipe}`, {headers})
        .subscribe(response => {
          observer.next(response.data);
          observer.complete();
        })
    })
  }

}
