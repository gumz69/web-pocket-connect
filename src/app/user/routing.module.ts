import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserComponent } from "./user.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: UserComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class RoutingModule {}
