import { Injectable} from '@angular/core';
import { categoryPocketEndpoint, topPocketEndpoint, typePocketEndpoint } from '../api/api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CategoryPocket, GetTypePocketResponse, TypePocket, getCategoryPocketResponse } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) { }

  getTypePocket(): Observable<Array<TypePocket>> {
    return new Observable(observer => {
      this.httpClient
        .get<GetTypePocketResponse>(`${typePocketEndpoint}`)
        .subscribe(response => {
          console.log({response});
          observer.next(response.data);
          observer.complete();
        })
    })
  }

  getCategoryPocket(tipe: string): Observable<Array<CategoryPocket>> {
    return new Observable(observer => {
      this.httpClient
        .get<getCategoryPocketResponse>(`${categoryPocketEndpoint}?tipe=${tipe}`)
        .subscribe(response => {
          console.log({response});
          observer.next(response.data);
          observer.complete();
        })
    })
  }

  getTopPocket(): Observable<Array<CategoryPocket>> {
    return new Observable(observer => {
      this.httpClient
        .get<getCategoryPocketResponse>(`${topPocketEndpoint}`)
        .subscribe(response => {
          console.log({response});
          observer.next(response.data);
          observer.complete();
        })
    })
  }

}
