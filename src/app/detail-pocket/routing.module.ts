import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DetailPocketComponent } from "./detail-pocket.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DetailPocketComponent,
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class RoutingModule {}
