import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    loadChildren: () =>
      import("./home/home.module").then((value) => value.HomeModule),
  },
];
