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
  },
  {
    path: 'pocket-detail',
    loadChildren: () =>
      import('./detail-pocket/detail-pocket.module').then(
        (value) => value.DetailPocketModule
      ),
  },
  {
    path: 'transaction',
    loadChildren: () =>
      import('./transactions/transactions.module').then(
        (value) => value.TransactionModule
      ),
  },
  {
    path: 'transaction-list',
    loadChildren: () =>
      import('./list-transaction/list-transaction.module').then(
        (value) => value.ListTransactionModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((value) => value.UserModule),
  },
];
