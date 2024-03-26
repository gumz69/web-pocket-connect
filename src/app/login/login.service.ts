import { Injectable } from '@angular/core';
import { loginEndpoint } from '../api/api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginData, LoginResponse } from './login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  auth(data: LoginData): Observable<LoginResponse> {
    return new Observable((observer) => {
      this.httpClient.post<LoginResponse>(`${loginEndpoint}`, data).subscribe({
        next: (response) => {
          observer.next(response);
          observer.complete();
        },
        error: (error) => {
          observer.error(error);
        },
      });
    });
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getAuth(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
}
