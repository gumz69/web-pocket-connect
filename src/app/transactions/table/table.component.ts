import { Component, OnInit } from '@angular/core';
import { transaction } from '../transactions';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  topListTransaksi: transaction[] = [];

  constructor(private services: TransactionsService) {}

  ngOnInit(): void {
      this.services.getListTopTransaction().subscribe((data) => {
        this.topListTransaksi = data;
      })
  }

}
