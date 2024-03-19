import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Transaksi } from './home';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  transaksi$: Observable<Array<Transaksi>>;
  constructor(private service: HomeService) {
    console.log('Transaksi List is Created!');
    this.transaksi$ = this.service.getTopTransaksi();
  }

  ngOnInit(): void {
    $('#exampleTable').DataTable();
  }

}
