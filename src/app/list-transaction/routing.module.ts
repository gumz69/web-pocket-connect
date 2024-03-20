import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ListTransactionComponent } from "./list-transaction.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ListTransactionComponent,
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class RoutingModule {}
