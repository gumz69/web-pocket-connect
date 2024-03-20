import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: '',
    component: CategoriesComponent,
  },

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class RoutingModule {}
