import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RoutingModule } from "./routing.module";
import { PocketsComponent } from "./pockets.component";
import { RouterLink } from "@angular/router";
import { GrafikModule } from "./grafik/grafik.module";
import { TableModule } from "./table/table.module";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";

@NgModule({
  declarations: [
    PocketsComponent,
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
export class PocketsModule { }
