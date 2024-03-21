import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoutingModule } from "./routing.module";
import { LoginComponent } from "./login.component";
import { RouterLink } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RoutingModule,
    RouterLink,
    HttpClientModule,
    FormsModule,
  ]
})
export class LoginModule { }
