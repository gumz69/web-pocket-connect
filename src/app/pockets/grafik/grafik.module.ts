import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrafikComponent } from './grafik.component';
import { JsonService } from '../../api/jsonservice.service';




@NgModule({
  declarations: [GrafikComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GrafikComponent
  ]
})
export class GrafikModule { }
