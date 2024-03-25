import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { UserService } from '../user.service';
import { ListDetailUser, User } from '../user';

@Component({
  selector: 'app-tambah-user',
  templateUrl: './tambah-user.component.html',
  styleUrl: './tambah-user.component.css',
})
export class TambahUserComponent implements OnInit {
  noRekening?: string;
  userId?: string;
  nama?: string;
  mpin?: string;
  telepon?: string;
  jenisTabungan?: string;
  jenisKelamin?: string;
  namaIbuKandung?: string;
  
  constructor(private router: Router, private serviceUser: UserService){}

  ngOnInit(): void {
    initFlowbite();
  }

  // navigateToUserPage() {
  //   this.router.navigate(['/user']);
  // }

  onTambahUser() {
    const dataUser: User = {
      id: this.mpin ?? '',
      noRekening: this.noRekening ?? '',
      userId: this.userId ?? '',
      nama: this.nama ?? '',
      mpin: this.mpin ?? '',
      telepon: this.telepon ?? '',
      jenisTabungan: this.jenisTabungan ?? '',
      jenisKelamin: this.jenisKelamin ?? '',
      namaIbuKandung: this.namaIbuKandung ?? '',
    };

    this.serviceUser.createUser(dataUser).subscribe({
      next: (data) => {
        console.log('User Created', data);
      },
      error: (error) => {
        console.error('Failed to create user', error.message);
      }
    })
  }

  // onTambahUser(tambahUser:{
  //   noRekening: string,
  //   userId: string,
  //   nama: string,
  //   mpin: string,
  //   telepon: string,
  //   jenisTabungan: string,
  //   jenisKelamin: string,
  //   namaIbuKandung: string
  // })
  // {
  //   console.log(tambahUser)
  //   this.httpClient.post('http://localhost:8080/api/nasabah',tambahUser)
  //   .subscribe((res)=>{
  //     console.log(res);
  //   })
  // }
}
