import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoutingModule } from "./routing.module";
import { LoginComponent } from "./login.component";
import { RouterLink } from "@angular/router";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RoutingModule,
    RouterLink
  ]
})
export class LoginModule { }
