import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TableComponent } from './table.component';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    RouterLink,
  ],
  exports: [TableComponent]
})
export class TableModule { }
