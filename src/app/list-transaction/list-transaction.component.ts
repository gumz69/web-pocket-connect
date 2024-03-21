import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { transaction } from '../transactions/transactions';
import { TransactionsService } from '../transactions/transactions.service';
import { formatDate } from '../helper/date.helper';
declare var $: any;

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrl: './list-transaction.component.css',
})
export class ListTransactionComponent implements OnInit {
  listTransaksi: transaction[] = [];
  selectedFilter: string = 'all';

  constructor(private services: TransactionsService) {}

  ngOnInit(): void {
    initFlowbite();
    this.getListTransaction();
  }


  getListTransaction() {
    this.selectedFilter = 'all';
    this.services.getListTransaction().subscribe((data) => {
      this.listTransaksi = data;
      this.initializeDataTable(data);
    });
  }

  filteredByDay() {
    this.selectedFilter = 'day';
    this.services.getListTransactionByDay().subscribe((data) => {
      this.listTransaksi = data;
      this.initializeDataTable(data);
    });
  }

  filteredByWeek() {
    this.selectedFilter = 'week';
    this.services.getListTransactionByWeek().subscribe((data) => {
      this.listTransaksi = data;
      this.initializeDataTable(data);
    });
  }

  filteredByMonth() {
    this.selectedFilter = 'month';
    this.services.getListTransactionByMonth().subscribe((data) => {
      this.listTransaksi = data;
      this.initializeDataTable(data);
    });
  }

  initializeDataTable(data: transaction[]) {
    const dataTableData = data.map((item) => {
      return { ...item, idTransaksi: item.idTransaksi.toString(), no: data.indexOf(item) + 1 };
    });

    if ($.fn.DataTable.isDataTable('#exampleTable')) {
      const table = $('#exampleTable').DataTable();
      table.clear().rows.add(dataTableData).draw();
    } else {
      $('#exampleTable').DataTable({
        data: dataTableData,
        columns: [
          { title: 'No', data: 'no' }, // New column for row numbers
          { title: 'ID Transaksi', data: 'idTransaksi' },
          { title: 'Nama Akun', data: 'namaNasabah' },
          { title: 'Nomor Rekening', data: 'noRekening' },
          { title: 'Jenis Transaksi', data: 'flag' },
          {
            title: 'Waktu Transaksi',
            data: 'waktuTransaksi',
            render: formatDate
          }
        ]
      });
    }
  }
}
