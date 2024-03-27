import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterModule,
    RouterOutlet,
    HttpClientModule,
    SidebarComponent,
    NavbarComponent,
    CommonModule,
  ],
})
export class AppComponent implements OnInit {
  title = 'pocket-connect';
  isLogin: boolean;
  isHidden: any = true;
  isActiveRoute: any;

  constructor(private service: LoginService, private services: AppService, private router: Router,) {
    this.isLogin = !!this.service.getAuth();
    this.isActiveRoute = this.router;
  }

  ngOnInit(): void {
    initFlowbite();
    this.services.getAuth().subscribe({
      next: (data) => {},
      error: (error) => {
        if (error.status === 401) {
          localStorage.removeItem('token');
        }
      },
    });
  }
}
