import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule, LoginComponent, HomeComponent],
})
export class AppComponent implements OnInit {
  title = 'pocket-connect';
  ngOnInit(): void {
    initFlowbite();
  }
}
