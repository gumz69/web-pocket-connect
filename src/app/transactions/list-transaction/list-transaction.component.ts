import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Subject } from 'rxjs';
import { Transaction } from '../transactions';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
})

export class ListTransactionComponent implements OnInit {
  listTransaksi: Transaction[] = [];
  selectedFilter: string = 'all';
  constructor(private services: TransactionsService) {}
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  ngOnInit(): void {
    initFlowbite();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.getListTransaction();
  }

  getListTransaction(): void {
    this.selectedFilter = 'all';
    this.listTransaksi = [];
    this.dtTrigger.next(this.listTransaksi);
    this.services
      .getListTransaction()
      .subscribe((transactions: Transaction[]) => {
        this.listTransaksi = transactions;
        this.dtTrigger.next(this.listTransaksi);
      });
  }

  filteredByDay() {
    this.selectedFilter = 'day';
    this.listTransaksi = [];
    this.dtTrigger.next(this.listTransaksi);
    this.services
      .getListTransactionByDay()
      .subscribe((transactions: Transaction[]) => {
        this.listTransaksi = transactions;
        this.dtTrigger.next(this.listTransaksi);
      });
  }

  filteredByWeek() {
    this.selectedFilter = 'week';
    this.listTransaksi = [];
    this.dtTrigger.next(this.listTransaksi);
    this.services
      .getListTransactionByWeek()
      .subscribe((transactions: Transaction[]) => {
        this.listTransaksi = transactions;
        this.dtTrigger.next(this.listTransaksi);
      });
  }

  filteredByMonth() {
    this.selectedFilter = 'month';
    this.listTransaksi = [];
    this.dtTrigger.next(this.listTransaksi);
    this.services
      .getListTransactionByMonth()
      .subscribe((transactions: Transaction[]) => {
        this.listTransaksi = transactions;
        this.dtTrigger.next(this.listTransaksi);
      });
  }
}
