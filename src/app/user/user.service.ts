import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListUserResponse, ListUser } from './user';
import { listUserEndPoint } from '../api/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private httpClient: HttpClient) { }

  getListUser(): Observable<Array<ListUser>>{
    return new Observable(observer=>{
      this.httpClient
      .get<GetListUserResponse>(`${listUserEndPoint}`)
      .subscribe(response=>{
        observer.next(response.data);
        observer.complete();
      })
    })
  }
}
