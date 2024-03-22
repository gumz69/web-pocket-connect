import { Injectable } from '@angular/core';
import { loginEndpoint } from '../api/api';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginData, LoginResponse } from './login';
import { error } from 'jquery';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  auth(data: LoginData): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${loginEndpoint}`, data).pipe(
      catchError((error) => {
        return throwError(error);
      })
    )
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getAuth(): boolean {
    const token = localStorage.getItem('token');
    return !token ? false : true;
  }

}
