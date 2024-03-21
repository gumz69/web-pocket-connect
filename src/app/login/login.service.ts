import { Injectable } from '@angular/core';
import { loginEndpoint } from '../api/api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginData, LoginResponse } from './login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isAuthenticated: boolean = false;
  constructor(private httpClient: HttpClient) {}

  login(data: LoginData): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${loginEndpoint}`, data);
  }

  getAuth(): boolean {
    const token = localStorage.getItem('token');
    return !token ? false : true;
  }
}
