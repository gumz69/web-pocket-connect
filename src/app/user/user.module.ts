import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { UserComponent } from './user.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { TambahUserComponent } from './tambah-user/tambah-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserComponent, TambahUserComponent, EditUserComponent, EditUserComponent],
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule,
    SidebarComponent,
    NavbarComponent,
    RouterLink,
    FormsModule
  ]
})
export class UserModule { }
