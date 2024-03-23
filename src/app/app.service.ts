import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { authEndpoint } from './api/api';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  getAuth(): Observable<String> {
    const token = localStorage.getItem('token');
    // Create headers object with Bearer token
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return new Observable((observer) => {
      this.httpClient.get<String>(`${authEndpoint}`, { headers }).subscribe({
        next: (response) => {
          observer.next(response);
          observer.complete();
        },
        error: (error) => {
          observer.error(error); // Emit the error to the observer
        },
      });
    });
  }
}
