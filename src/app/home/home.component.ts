import { Component } from '@angular/core';
import { Transaksi } from './home';
import { HomeService } from './HomeService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  transaksi$: Observable<Array<Transaksi>>;
  constructor(private service: HomeService) {
    console.log('Transaksi List is Created!');
    this.transaksi$ = this.service.getTopTransaksi();
  }
}
