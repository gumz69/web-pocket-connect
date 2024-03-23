import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserComponent } from "./user.component";
import { TambahUserComponent } from "./tambah-user/tambah-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'tambah-user',
    component: TambahUserComponent
  },
  {
    path: 'edit-user',
    component: EditUserComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class RoutingModule {}
