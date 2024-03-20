import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TableComponent } from './table.component';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    RouterLink,
  ],
  exports: [TableComponent]
})
export class TableModule { }
