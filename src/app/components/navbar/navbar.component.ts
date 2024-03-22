import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  username?: string;

  constructor(private services: LoginService){ }

  ngOnInit(): void {
      this.getUsername();
  }

  getUsername(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      this.username = payload.username;
    }

  }

  onLogout(): void {
    this.services.logout();
  }
}
