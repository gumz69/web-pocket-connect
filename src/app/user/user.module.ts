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
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { PopupDeleteUserComponent } from '../components/popup-delete-user/popup-delete-user.component';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

@NgModule({
  declarations: [UserComponent, TambahUserComponent, EditUserComponent],
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule,
    SidebarComponent,
    NavbarComponent,
    RouterLink,
    FormsModule,
    DataTablesModule,
    PopupDeleteUserComponent,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule
  ],
  exports: [UserComponent],
})
export class UserModule {}
