import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { UserComponent } from './user.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RoutingModule,
    RouterLink,
    NavbarComponent,
    SidebarComponent
  ]
})
export class UserModule { }
