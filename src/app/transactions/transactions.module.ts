import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RoutingModule } from "./routing.module";
import { RouterLink } from "@angular/router";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { TransactionsComponent } from "./transactions.component";
import { ListTransactionComponent } from "./list-transaction/list-transaction.component";
import { GrafikComponent } from "./grafik/grafik.component";
import { TableComponent } from "./table/table.component";

@NgModule({
  declarations: [
    ListTransactionComponent, GrafikComponent, TableComponent, TransactionsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule,
    RouterLink,
    SidebarComponent,
    NavbarComponent
  ],
})
export class TransactionModule { }
