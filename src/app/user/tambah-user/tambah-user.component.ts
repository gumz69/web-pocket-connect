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
  
  user: User = {
    id: '',
    userId: '',
    noRekening: '',
    nama: '',
    mpin: '',
    telepon: '',
    jenisTabungan: '',
    jenisKelamin: '',
    namaIbuKandung: '',
  };
  submitted = false;
  
  constructor(private router: Router, private serviceUser: UserService){}

  ngOnInit(): void {
    initFlowbite();
  }

  onTambahUser() {
    this.submitted = true;
    this.serviceUser.createUser(this.user).subscribe({
      next: (data: User) => {
        console.log('User created successfully!');
        this.router.navigate(['/user']);
        this.user = {
          id: '',
          userId: '',
          noRekening: '',
          nama: '',
          mpin: '',
          telepon: '',
          jenisTabungan: '',
          jenisKelamin: '',
          namaIbuKandung: '',
        };
        this.submitted = false;
      },
      error: (error) => {
        console.log('Error creating user!');
      }
    }
    );
  }

}
