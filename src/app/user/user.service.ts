import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GetListUserDetailResponse,
  GetListUserResponse,
  GetUserDetailResponse,
  ListDetailUser,
  ListUser,
  User,
} from './user';
import { createUserEndPoint, listUserDetailEndPoint, listUserEndPoint } from '../api/api';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  listUser: ListUser[] = [];
  ListDetailUser: ListDetailUser[] = [];
  token = localStorage.getItem('token');
  headers = new HttpHeaders({ Authorization: `Bearer ${this.token}` });

  constructor(
    private httpClient: HttpClient
     ) { }

  getListUser(): Observable<Array<ListUser>>{
    return new Observable(observer=>{
      this.httpClient
      .get<GetListUserResponse>(`${listUserEndPoint}`, {headers: this.headers})
      .subscribe((response) =>{
        console.log('List Data:', response);
        observer.next(response.data);
        observer.complete();
      })
    })
  }

  getListUserDetail(): Observable<Array<ListDetailUser>>{
    return new Observable(observer=>{
      this.httpClient
      .get<GetListUserDetailResponse>(`${listUserDetailEndPoint}`, {headers: this.headers})
      .subscribe(response=>{
        observer.next(response.data);
        observer.complete();
      })
    })
  }

  getUserDetail(id:number) : Observable<User>{
    return new Observable(observer=>{
      this.httpClient
      .get<GetUserDetailResponse>(`${listUserDetailEndPoint}/${id}`, {headers: this.headers})
      .subscribe(response=>{
        console.log('Data ID: ', id, 'Response:', response.data)
        observer.next(response.data);
        observer.complete();
      })
    })
  }

  updateUser(data:User) : Observable<User>{
    return new Observable(observer=>{
      this.httpClient
      .put<User>(`${listUserDetailEndPoint}/${data.id}`, data, {headers: this.headers})
      .subscribe(response=>{
        observer.next(response);
        observer.complete();
      })
    })
  }

  createUser(data: User) : Observable<User>{
    return new Observable((observer) => {
      this.httpClient.post<GetUserDetailResponse>(`${createUserEndPoint}`, data, {headers: this.headers})
        .subscribe({
          next: (response) => {
            observer.next(response.data);
            observer.complete();
          },
          error: (error) => {
            observer.error(error);
          }
        })
    })
  }

  deleteUser(id:string): Observable<any>{
    return new Observable(observer=>{
      this.httpClient
      .delete<any>(`${listUserDetailEndPoint}/${id}`, {headers: this.headers})
      .subscribe({
        next: (response) =>{
          console.log('User deleted successfully (ID:', id, ')');
          observer.next(response);
          observer.complete();
        },
        error: (error) => {
          console.error('Error deleting user (ID:', id, ')');
          observer.error(error);
        }
      })
    })
  }
}
