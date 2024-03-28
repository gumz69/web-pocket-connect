import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { UserService } from '../user.service';
import { User } from '../user';
import { isEnamChar, isLetterPattern, isMinDuaBelasChar, isMinEnamChar, isNumber, isSepuluhChar, } from '../../helper/util.helper';

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

  constructor(private router: Router, private serviceUser: UserService) {}
  isInput: string = '';

  errorMessageNama : string | null = null;
  validateNama(event: any) {
    this.isInput = event.target.value;
    this.errorMessageNama = isLetterPattern(this.isInput ) ? null : 'Hanya dapat menggunakan huruf';
  }

  errorMessageUserIdString : string | null = null;
  errorMessageUserIdMinChar: string | null = null;
  validateUserId(event: any) {
    this.isInput = event.target.value;
    this.errorMessageUserIdMinChar = isMinEnamChar(this.isInput) ? null : 'Min. 6 Karakter';
  }

  errorMessageNoRekNumber : string | null = null;
  errorMessageNoRekChar : string | null = null;
  validateNoRek(event: any) {
    this.isInput = event.target.value;
    this.errorMessageNoRekNumber = isNumber(this.isInput) ? null : 'Hanya dapat menggunakan angka';
    this.errorMessageNoRekChar = isSepuluhChar(this.isInput) ? null : 'Harus 10 Karakter';
  }

  errorMessageNoTelpNumber : string | null = null;
  errorMessageNoTelpChar : string | null = null;
  validateNoTelp(event: any){
    this.isInput = event.target.value;
    this.errorMessageNoTelpNumber = isNumber(this.isInput) ? null : 'Hanya dapat menggunakan angka';
    this.errorMessageNoTelpChar = isMinDuaBelasChar(this.isInput) ? null : 'Min. 12 Karakter';
  }

  errorMessageNamaIbuKandung : string | null = null;
  validateNamaIbuKandung(event: any){
    this.isInput = event.target.value;
    this.errorMessageNamaIbuKandung = isLetterPattern(this.isInput) ? null : 'Hanya dapat menggunakan huruf';
  }

  errorMessageJenisTabungan : string | null = null;
  validateJenisTabungan(event: any){
    this.isInput = event.target.value;
    this.errorMessageJenisTabungan = isLetterPattern(this.isInput) ? null : 'Hanya dapat menggunakan huruf';
  }

  errorMessageMpinNumber : string | null = null;
  errorMessageMpinChar : string | null = null;
  validateMpin(event: any){
    this.isInput = event.target.value;
    this.errorMessageMpinNumber = isNumber(this.isInput) ? null : 'Hanya dapat menggunakan angka';
    this.errorMessageMpinChar = isEnamChar(this.isInput) ? null : 'Harus 6 Karakter';
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
