import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [RouterModule, RouterOutlet, HttpClientModule, SidebarComponent, NavbarComponent]
})
export class AppComponent implements OnInit {
  title = 'pocket-connect';
  isLogin: boolean;

  constructor(private service: LoginService, private services: AppService) {
    this.isLogin = !!this.service.getAuth();
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
