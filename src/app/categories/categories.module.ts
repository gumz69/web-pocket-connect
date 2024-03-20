import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './categories.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { RoutingModule } from './routing.module';
import { ThousandSeparatorPipe } from '../helper/thousand-separator.pipe';



@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule,
    SidebarComponent,
    NavbarComponent,
    ThousandSeparatorPipe,
  ],
})
export class CategoriesModule { }
