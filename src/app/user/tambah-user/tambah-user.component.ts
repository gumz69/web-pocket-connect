import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-tambah-user',
  templateUrl: './tambah-user.component.html',
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

  username: string = '';
  errorMessage: string | null = null;
  letterPattern = /^[a-zA-Z]+$/;
  constructor(private router: Router, private serviceUser: UserService) {}

  validateUsername(event: any) {
    this.username = event.target.value;
    this.errorMessage = this.letterPattern.test(this.username) ? null : 'Invalid input: Only letters allowed.';
  }

  // isString(value: any): boolean {
  //   return typeof value === 'string';
  // }

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
      },
    });
  }
}
