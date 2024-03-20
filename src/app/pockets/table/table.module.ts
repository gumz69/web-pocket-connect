import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
