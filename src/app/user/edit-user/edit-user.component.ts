import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { isLetterPattern, isMinDuaBelasChar, isNumber, } from '../../helper/util.helper';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
})
export class EditUserComponent implements OnInit {
  nasabah: any = null;
  id?: number;
  errorMessageLetter: string | null = null;
  errorMessageMinNumber: string | null = null;
  errorMessageTelepon: string | null = null;
  errorMessageNamaIbu: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  validateUsername(event: any) {
    this.nasabah.nama = event.target.value;
    if (!this.nasabah.nama.trim()) {
      this.errorMessageLetter = '*Nama tidak boleh kosong';
      return;
    }
    this.errorMessageLetter = isLetterPattern(this.nasabah.nama) ? null : '*Hanya dapat menggunakan huruf';
  }
  
  validateTelepon(event: any) {
    this.nasabah.telepon = event.target.value;
    if (!this.nasabah.telepon.trim()) {
      this.errorMessageTelepon = '*Nomor telepon tidak boleh kosong';
      return;
    }
    this.errorMessageTelepon = isNumber(this.nasabah.telepon) ? null : '*Hanya dapat menggunakan angka';
    this.errorMessageMinNumber = isMinDuaBelasChar(this.nasabah.telepon) ? null : '*Min. 12 Karakter';
  }
  
  validateNamaIbu(event: any) {
    this.nasabah.namaIbuKandung = event.target.value;
    if (!this.nasabah.namaIbuKandung.trim()) {
      this.errorMessageNamaIbu = '*Nama ibu kandung tidak boleh kosong';
      return;
    }
    this.errorMessageNamaIbu = isLetterPattern(this.nasabah.namaIbuKandung) ? null : '*Hanya dapat menggunakan huruf';
  }

  navigateToUserPage() {
    this.router.navigate(['/user']);
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID:', this.id);
    if (this.id) {
      this.userService.getUserDetail(this.id).subscribe({
        next: (data: User) => {
          this.nasabah = data;
          this.cdr.detectChanges();
        },
        error: (error) => {
          if (error.status === 401) {
            console.log('Unauthorized error');
            localStorage.removeItem('token');
          }
        },
      });
    }
  }

  onUpdateUser() {
    this.userService.updateUser(this.nasabah).subscribe({
      next: () => {
        console.log('User updated successfully');
        this.router.navigate(['/user']);
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }
}
