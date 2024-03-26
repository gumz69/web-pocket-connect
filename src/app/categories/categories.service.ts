import { Injectable} from '@angular/core';
import { categoryPocketEndpoint, typePocketEndpoint } from '../api/api';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoryPocket, GetTypePocketResponse, TypePocket, GetCategoryPocketResponse } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) { }
  token = localStorage.getItem('token');
  headers = new HttpHeaders({ Authorization: `Bearer ${this.token}` });
  getTypePocket(): Observable<Array<TypePocket>> {
    return new Observable(observer => {
      this.httpClient
        .get<GetTypePocketResponse>(`${typePocketEndpoint}`, {headers: this.headers})
        .subscribe(response => {
          observer.next(response.data);
          observer.complete();
        })
    })
  }

  getCategoryPocket(tipe: string): Observable<Array<CategoryPocket>> {
    return new Observable(observer => {
      this.httpClient
        .get<GetCategoryPocketResponse>(`${categoryPocketEndpoint}?tipe=${tipe}`, {headers: this.headers})
        .subscribe(response => {
          observer.next(response.data);
          observer.complete();
        })
    })
  }

}
