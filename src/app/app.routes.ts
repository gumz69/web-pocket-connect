import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./categories/categories.module').then((value) => value.CategoriesModule),
  },
  {
    path: 'pocket',
    loadChildren: () =>
      import('./pockets/pockets.module').then((value) => value.PocketsModule),
  },
  {
    path: 'pocket-detail',
    loadChildren: () =>
      import('./detail-pocket/detail-pocket.module').then((value) => value.DetailPocketModule),
  },
  {
    path: 'transaction-list',
    loadChildren: () =>
      import('./list-transaction/list-transaction.module').then((value) => value.ListTransactionModule),
  }
];
