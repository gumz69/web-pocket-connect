import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-tambah-user',
  templateUrl: './tambah-user.component.html',
  styleUrl: './tambah-user.component.css'
})
export class TambahUserComponent implements OnInit {
  
  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    initFlowbite();
  }



  onTambahUser(users:{
    noRekening: string,
    userId: string,
    nama: string,
    mpin: string,
    telepon: string,
    jenisTabungan: string,
    jenisKelamin: string,
    namaIbuKandung: string
  }){
    console.log(users)
    this.httpClient.post('http://localhost:8080/api/nasabah',users)
    .subscribe((res)=>{
      console.log(res);
    })
  }
}
