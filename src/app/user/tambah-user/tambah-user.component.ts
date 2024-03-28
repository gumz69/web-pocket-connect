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
   nasabah: User = {
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

  isButtonDisabled(): boolean {
    return !!this.errorMessageNama ||
           !!this.errorMessageUserIdString ||
           !!this.errorMessageUserIdMinChar ||
           !!this.errorMessageNoRekNumber ||
           !!this.errorMessageNoRekChar ||
           !!this.errorMessageNoTelpNumber ||
           !!this.errorMessageNoTelpChar ||
           !!this.errorMessageNamaIbuKandung ||
           !!this.errorMessageJenisTabungan ||
           !!this.errorMessageMpinNumber ||
           !!this.errorMessageMpinChar;
  }

  isFormFilled(): boolean {
    return  !!this.nasabah.nama && 
            !!this.nasabah.userId &&
            !!this.nasabah.noRekening &&
            !!this.nasabah.telepon &&
            !!this.nasabah.jenisKelamin &&
            !!this.nasabah.jenisKelamin &&
            !!this.nasabah.namaIbuKandung &&
            !!this.nasabah.jenisTabungan &&
            !!this.nasabah.mpin;
  }

  constructor(private router: Router, private serviceUser: UserService) {}


  errorMessageNama : string | null = null;
  validateNama(event: any) {
    this.nasabah.nama = event.target.value;
    if (!this.nasabah.nama.trim()) {
      this.errorMessageNama = '*Nama tidak boleh kosong';
      return;
    }
    this.errorMessageNama = isLetterPattern(this.nasabah.nama ) ? null : '*Hanya dapat menggunakan huruf';
  }

  errorMessageUserIdString : string | null = null;
  errorMessageUserIdMinChar: string | null = null;
  validateUserId(event: any) {
    this.nasabah.userId = event.target.value;
    if (!this.nasabah.userId.trim()) {
      this.errorMessageUserIdMinChar = '*User Id tidak boleh kosong';
      return;
    }
    this.errorMessageUserIdMinChar = isMinEnamChar(this.nasabah.userId) ? null : '*Min. 6 Karakter';
  }

  errorMessageNoRekNumber : string | null = null;
  errorMessageNoRekChar : string | null = null;
  validateNoRek(event: any) {
    this.nasabah.noRekening = event.target.value;
    if (!this.nasabah.noRekening.trim()) {
      this.errorMessageNoRekNumber = '*Nomor Rekening tidak boleh kosong';
      return;
    }
    this.errorMessageNoRekNumber = isNumber(this.nasabah.noRekening) ? null : '*Hanya dapat menggunakan angka';
    this.errorMessageNoRekChar = isSepuluhChar(this.nasabah.noRekening) ? null : '*Harus 10 Karakter';
  }

  errorMessageNoTelpNumber : string | null = null;
  errorMessageNoTelpChar : string | null = null;
  validateNoTelp(event: any){
    this.nasabah.telepon = event.target.value;
    if (!this.nasabah.telepon.trim()) {
      this.errorMessageNoTelpNumber = '*Nomor telepon tidak boleh kosong';
      return;
    }
    this.errorMessageNoTelpNumber = isNumber(this.nasabah.telepon) ? null : '*Hanya dapat menggunakan angka';
    this.errorMessageNoTelpChar = isMinDuaBelasChar(this.nasabah.telepon) ? null : '*Min. 12 Karakter';
  }

  errorMessageNamaIbuKandung : string | null = null;
  validateNamaIbuKandung(event: any){
    this.nasabah.namaIbuKandung = event.target.value;
    if (!this.nasabah.namaIbuKandung.trim()) {
      this.errorMessageNamaIbuKandung = '*Nama Ibu Kandung tidak boleh kosong';
      return;
    }
    this.errorMessageNamaIbuKandung = isLetterPattern(this.nasabah.namaIbuKandung) ? null : '*Hanya dapat menggunakan huruf';
  }

  errorMessageJenisTabungan : string | null = null;
  validateJenisTabungan(event: any){
    this.nasabah.jenisTabungan = event.target.value;
    if (!this.nasabah.jenisTabungan.trim()) {
      this.errorMessageJenisTabungan = '*Jenis Tabungan tidak boleh kosong';
      return;
    }
    this.errorMessageJenisTabungan = isLetterPattern(this.nasabah.jenisTabungan) ? null : '*Hanya dapat menggunakan huruf';
  }

  errorMessageMpinNumber : string | null = null;
  errorMessageMpinChar : string | null = null;
  validateMpin(event: any){
    this.nasabah.mpin = event.target.value;
    if (!this.nasabah.mpin.trim()) {
      this.errorMessageNama = '*MPIN tidak boleh kosong';
      return;
    }
    this.errorMessageMpinNumber = isNumber(this.nasabah.mpin) ? null : '*Hanya dapat menggunakan angka';
    this.errorMessageMpinChar = isEnamChar(this.nasabah.mpin) ? null : '*Harus 6 Karakter';
  }


  // isString(value: any): boolean {
  //   return typeof value === 'string';
  // }

  ngOnInit(): void {
    initFlowbite();
  }

  onTambahUser() {
    this.submitted = true;
    this.serviceUser.createUser(this.nasabah).subscribe({
      next: (data: User) => {
        console.log('User created successfully!');
        this.router.navigate(['/user']);
        this.nasabah = {
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
