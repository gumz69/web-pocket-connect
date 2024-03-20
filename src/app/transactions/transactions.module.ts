import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RoutingModule } from "./routing.module";
import { RouterLink } from "@angular/router";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { TransactionsComponent } from "./transactions.component";
import { GrafikModule } from "./grafik/grafik.module";
import { TableModule } from "./table/table.module";

@NgModule({
  declarations: [
    TransactionsComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule,
    RouterLink,
    GrafikModule,
    TableModule,
    SidebarComponent,
    NavbarComponent
  ],
})
export class TransactionModule { }
