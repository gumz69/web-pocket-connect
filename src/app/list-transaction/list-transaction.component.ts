import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { transaction } from '../transactions/transactions';
import { TransactionsService } from '../transactions/transactions.service';
declare var $: any;
@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrl: './list-transaction.component.css'
})
export class ListTransactionComponent implements OnInit {

  listTransaksi: transaction[] = [];
  selectedFilter: string = 'all';

  constructor(private services: TransactionsService) {}

  ngOnInit(): void {
    initFlowbite();
    $('#exampleTable').DataTable();
    this.getListTransaction();
  }

  getListTransaction() {
    this.selectedFilter = 'all';
    this.services.getListTransaction().subscribe((data) => {
      this.listTransaksi = data;
      console.log('Data:', this.listTransaksi);
    })
  }

  filteredByDay() {
    this.selectedFilter = 'day';
    this.services.getListTransactionByDay().subscribe((data) => {
      this.listTransaksi = data;
      console.log('Data By Day:', this.listTransaksi);
    })
  }

  filteredByWeek() {
    this.selectedFilter = 'week';
    this.services.getListTransactionByWeek().subscribe((data) => {
      this.listTransaksi = data;
      console.log('Data By Week:', this.listTransaksi);
    })
  }

  filteredByMonth() {
    this.selectedFilter = 'month';
    this.services.getListTransactionByMonth().subscribe((data) => {
      this.listTransaksi = data;
      console.log('Data By Month:', this.listTransaksi);
    })
  }
}
