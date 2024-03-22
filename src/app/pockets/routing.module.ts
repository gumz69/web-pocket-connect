  import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PocketsComponent } from "./pockets.component";
import { DetailPocketComponent } from "./detail-pocket/detail-pocket.component";

const routes: Routes = [
  {
    path: '',
    component: PocketsComponent,
  },
  {
    path: 'detail',
    component: DetailPocketComponent,
  },

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class RoutingModule {}
