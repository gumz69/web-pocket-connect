import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './categories.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { RoutingModule } from './routing.module';
import { ThousandSeparatorPipe } from '../helper/thousand-separator.pipe';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule,
    RouterLink,
    SidebarComponent,
    NavbarComponent,
    ThousandSeparatorPipe
  ],
})
export class CategoriesModule { }
