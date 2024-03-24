import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GetListUserDetailResponse,
  GetListUserResponse,
  ListDetailUser,
  ListUser,
} from './user';
import { listUserDetailEndPoint, listUserEndPoint } from '../api/api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  listUser: ListUser[] = [];
  ListDetailUser: ListDetailUser[] = [];
  token = localStorage.getItem('token');
  headers = new HttpHeaders({ Authorization: `Bearer ${this.token}` });

  constructor(
    private httpClient: HttpClient,
    private userDetailClient: HttpClient,
  ) {}

  getListUser(): Observable<Array<ListUser>> {
    return new Observable((observer) => {
      this.httpClient
        .get<GetListUserResponse>(`${listUserEndPoint}`, {headers: this.headers})
        .subscribe((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }

  getListUserDetail(): Observable<Array<ListDetailUser>> {
    return new Observable((observer) => {
      this.userDetailClient
        .get<GetListUserDetailResponse>(`${listUserDetailEndPoint}`)
        .subscribe((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }
  getUserDetail(id: string) {
    return this.httpClient.get(`http://localhost:8080/api/nasabah/${id}`);
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
