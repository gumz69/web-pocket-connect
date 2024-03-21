import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RoutingModule } from "./routing.module";
import { PocketsComponent } from "./pockets.component";
import { RouterLink } from "@angular/router";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { GrafikComponent } from "./grafik/grafik.component";
import { TableComponent } from "./table/table.component";
import { DetailPocketComponent } from "./detail-pocket/detail-pocket.component";

@NgModule({
  declarations: [
    PocketsComponent, GrafikComponent, TableComponent, DetailPocketComponent
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
export class PocketsModule { }
