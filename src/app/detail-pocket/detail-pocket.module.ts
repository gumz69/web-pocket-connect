import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPocketComponent } from './detail-pocket.component';
import { RoutingModule } from './routing.module';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { NavbarComponent } from '../components/navbar/navbar.component';



@NgModule({
  declarations: [DetailPocketComponent],
  imports: [
    CommonModule,
    RoutingModule,
    SidebarComponent,
    NavbarComponent
  ],
  exports: [
    DetailPocketComponent
  ]
})
export class DetailPocketModule { }
