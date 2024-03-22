import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Subject } from 'rxjs';
import { transaction } from '../transactions';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrl: './list-transaction.component.css',
})
export class ListTransactionComponent implements OnInit {
  listTransaksi: transaction[] = [];
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
    this.services
      .getListTopTransaction()
      .subscribe((transactions: transaction[]) => {
        this.listTransaksi = transactions;
        this.dtTrigger.next(this.listTransaksi);
      });
  }

  filteredByDay() {
    this.selectedFilter = 'day';
    this.services
      .getListTransactionByDay()
      .subscribe((transactions: transaction[]) => {
        this.listTransaksi = transactions;
        this.dtTrigger.next(this.listTransaksi);
      });
  }

  filteredByWeek() {
    this.selectedFilter = 'week';
    this.services
      .getListTransactionByWeek()
      .subscribe((transactions: transaction[]) => {
        this.listTransaksi = transactions;
        this.dtTrigger.next(this.listTransaksi);
      });
  }

  filteredByMonth() {
    this.selectedFilter = 'month';
    this.services
      .getListTransactionByMonth()
      .subscribe((transactions: transaction[]) => {
        this.listTransaksi = transactions;
        this.dtTrigger.next(this.listTransaksi);
      });
  }

  // initializeDataTable(data: transaction[]) {
  //   const dataTableData = data.map((item) => {
  //     return { ...item, idTransaksi: item.idTransaksi.toString(), no: data.indexOf(item) + 1 };
  //   });

  //   if ($.fn.DataTable.isDataTable('#exampleTable')) {
  //     const table = $('#exampleTable').DataTable();
  //     table.clear().rows.add(dataTableData).draw();
  //   } else {
  //     // $('#exampleTable').DataTable({
  //     //   data: dataTableData,
  //     //   columns: [
  //     //     { title: 'No', data: 'no' }, // New column for row numbers
  //     //     { title: 'ID Transaksi', data: 'idTransaksi' },
  //     //     { title: 'Nama Akun', data: 'namaNasabah' },
  //     //     { title: 'Nomor Rekening', data: 'noRekening' },
  //     //     { title: 'Jenis Transaksi', data: 'flag',
  //     //    },
  //     //     {
  //     //       title: 'Waktu Transaksi',
  //     //       data: 'waktuTransaksi',
  //     //       render: formatDate
  //     //     }
  //     //   ]
  //     // });
  //   }
  // }
}
