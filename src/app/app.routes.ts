import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './login/login.guard';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./categories/categories.module').then(
        (value) => value.CategoriesModule
      ),
    canActivate: [loginGuard],
  },
  {
    path: 'pocket',
    loadChildren: () =>
      import('./pockets/pockets.module').then((value) => value.PocketsModule),
    canActivate: [loginGuard],
  },
  {
    path: 'transaction',
    loadChildren: () =>
      import('./transactions/transactions.module').then(
        (value) => value.TransactionModule
      ),
    canActivate: [loginGuard],
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((value) => value.UserModule),
    canActivate: [loginGuard],
  },
];
