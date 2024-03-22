import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-tambah-user',
  templateUrl: './tambah-user.component.html',
  styleUrl: './tambah-user.component.css',
})
export class TambahUserComponent implements OnInit {
  
  constructor(
    private httpClient: HttpClient,
    private router: Router){}

  ngOnInit(): void {
    initFlowbite();
  }

  // navigateToUserPage() {
  //   this.router.navigate(['/user']);
  // }

  onTambahUser(tambahUser:{
    noRekening: string,
    userId: string,
    nama: string,
    mpin: string,
    telepon: string,
    jenisTabungan: string,
    jenisKelamin: string,
    namaIbuKandung: string
  })
  {
    console.log(tambahUser)
    this.httpClient.post('http://localhost:8080/api/nasabah',tambahUser)
    .subscribe((res)=>{
      console.log(res);
    })
  }
}
