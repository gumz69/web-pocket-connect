import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserResponse, GetListUserDetailResponse, GetListUserResponse, ListDetailUser, ListUser, User } from './user';
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
  // return this.httpClient.get(`http://localhost:8080/api/nasabah/${id}`)
  getUserDetail(id:number) : Observable<User>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable(observer=>{
      this.httpClient
      .get<User>(`${listUserDetailEndPoint}/${id}`, {headers})
      .subscribe(response=>{
        console.log('Data ID: ', id, 'Response:', response)
        observer.next(response);
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
        console.log('Data ID: ', data.id, 'Response:', response)
        observer.next(response);
        observer.complete();
      })
    })
  }

  createUser(data: User) : Observable<Array<CreateUserResponse[]>>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable((observer) => {
      this.httpClient.post<any>(`${createUserEndPoint}`, data, {headers})
        .subscribe({
          next: (response) => {
            observer.next(response);
            observer.complete();
          },
          error: (error) => {
            observer.error(error);
          }
        })
    })
  }


  // getAllNasabah() {
  //   this.getListUser().subscribe(data => {
  //     this.listUser = data;
  //   });
  // }

  // // listUser: ListUser[] = [];
  // onEditUser(id: string){
  //   let dataNasabah = this.listUser.find((p)=> {return p.id === id});
  //   console.log(dataNasabah)
  //   // this.httpClient.put('http://localhost:8080/api/nasabah/' + id).subscribe();
  // }

  
}
