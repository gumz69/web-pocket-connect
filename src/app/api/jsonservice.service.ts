import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) {
  }

  getBarChartData(){
    return this.http.get("http://localhost:3000/data");
  }

  getTabelNasabah(){
    return this.http.get("http://localhost:8089/api/nasabah/dashboard")
  }

}
