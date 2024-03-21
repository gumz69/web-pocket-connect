import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TransactionsComponent } from "./transactions.component";
import { ListTransactionComponent } from "./list-transaction/list-transaction.component";

const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent
  },
  {
    path: 'list',
    component: ListTransactionComponent
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class RoutingModule {}
