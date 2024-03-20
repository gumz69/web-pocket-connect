import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PocketsComponent } from "./pockets.component";
import { LoginComponent } from "../login/login.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PocketsComponent,
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class RoutingModule {}
