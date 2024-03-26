import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginData } from './login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  username?: string;
  password?: string;
  errorMessage?: string;

  constructor(private router: Router, private authService: LoginService) {}
  ngOnInit(): void {
    initFlowbite();
  }

  onSubmit() {
    const loginData: LoginData = {
      username: this.username ?? '',
      password: this.password ?? '',
    };

    this.authService.auth(loginData).subscribe({
      next: (data) => {
        console.log('Login berhasil', data);
        localStorage.setItem('token', data.data)
        this.router.navigate(["pocket"]);
      },
      error: (error) => {
        console.error('Login gagal', error.message);
        this.errorMessage = error.error.message;
      },
    });
  }

  closeAndRedirect(): void {
    this.errorMessage = ''; // Kosongkan pesan kesalahan
    this.username = ''; // Reset nilai username
    this.password = ''; // Reset nilai password
  }

  isFormFilled(): boolean {
    return !!this.username && !!this.password;
  }
}

