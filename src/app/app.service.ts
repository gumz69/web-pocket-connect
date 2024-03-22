import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { authEndpoint } from './api/api';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  getAuth(): Observable<String> {
    return new Observable((observer) => {
      this.httpClient.get<String>(`${authEndpoint}`).subscribe(
        (response) => {
          observer.next(response);
          observer.complete();
        },
        (error) => {
          observer.error(error); // Emit the error to the observer
        }
      );
    });
  }
}
