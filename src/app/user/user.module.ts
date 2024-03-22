import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { UserComponent } from './user.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule,
    SidebarComponent,
    NavbarComponent,
    RouterLink,
    
  ]
})
export class UserModule { }
