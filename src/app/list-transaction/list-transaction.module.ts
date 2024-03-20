import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTransactionComponent } from './list-transaction.component';
import { RoutingModule } from './routing.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@NgModule({
  declarations: [ListTransactionComponent],
  imports: [
    CommonModule,
    RoutingModule,
    NavbarComponent,
    SidebarComponent
  ],
})
export class ListTransactionModule { }
