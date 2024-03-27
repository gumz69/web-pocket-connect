import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transactions';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit{
  topListTransaksi: Transaction[] = [];

  constructor(private services: TransactionsService) {}

  ngOnInit(): void {
      this.services.getListTopTransaction().subscribe((data) => {
        this.topListTransaksi = data;
      })
  }

}
