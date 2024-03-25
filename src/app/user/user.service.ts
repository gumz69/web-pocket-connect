import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserResponse, GetListUserDetailResponse, GetListUserResponse, GetUserDetailResponse, ListDetailUser, ListUser, User } from './user';
import { createUserEndPoint, listUserDetailEndPoint, listUserEndPoint } from '../api/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  listUser: ListUser[] = [];
  ListDetailUser: ListDetailUser[] = [];

  constructor( 
    private httpClient: HttpClient
     ) { }

  getListUser(): Observable<Array<ListUser>>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable(observer=>{
      this.httpClient
      .get<GetListUserResponse>(`${listUserEndPoint}`, {headers})
      .subscribe((response) =>{
        console.log('List Data:', response);
        observer.next(response.data);
        observer.complete();
      })
    })
  }

  getListUserDetail(): Observable<Array<ListDetailUser>>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable(observer=>{
      this.httpClient
      .get<GetListUserDetailResponse>(`${listUserDetailEndPoint}`, {headers})
      .subscribe(response=>{
        observer.next(response.data);
        observer.complete();
      })
    })
  }
 
  getUserDetail(id:number) : Observable<User>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable(observer=>{
      this.httpClient
      .get<GetUserDetailResponse>(`${listUserDetailEndPoint}/${id}`, {headers})
      .subscribe(response=>{
        console.log('Data ID: ', id, 'Response:', response.data)
        observer.next(response.data);
        observer.complete();
      })
    })
  }
  
  updateUser(data:User) : Observable<User>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable(observer=>{
      this.httpClient
      .put<User>(`${listUserDetailEndPoint}/${data.id}`, data, {headers})
      .subscribe(response=>{
        observer.next(response);
        observer.complete();
      })
    })
  }

  createUser(data: User) : Observable<User>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable((observer) => {
      this.httpClient.post<GetUserDetailResponse>(`${createUserEndPoint}`, data, {headers})
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
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable(observer=>{
      this.httpClient
      .delete<any>(`${listUserDetailEndPoint}/${id}`, {headers})
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
