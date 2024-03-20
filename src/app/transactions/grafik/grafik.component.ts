import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { transactionChart } from '../transactions';
import { TransactionsService } from '../transactions.service';
@Component({
  selector: 'app-grafik',
  templateUrl: './grafik.component.html',
  styleUrl: './grafik.component.css',
})
export class GrafikComponent implements OnInit {
  transactionChart: transactionChart[] = [];
  transactionDebit: transactionChart[] = [];
  transactionKredit: transactionChart[] = [];

  constructor(private services: TransactionsService) {}

  ngOnInit(): void {
    this.services.getGrafikTransaction().subscribe((data) => {
      this.transactionChart = data;
      this.transactionDebit = this.transactionChart
        .sort((a, b) => a.bulanTransaksi - b.bulanTransaksi)
        .filter((item) => item.jenisTransaksi === 'debit');

      this.transactionKredit = this.transactionChart
        .sort((a, b) => a.bulanTransaksi - b.bulanTransaksi)
        .filter((item) => item.jenisTransaksi === 'kredit');

      this.createChartTransaction();
    });
  }

  createChartTransaction(): void {
    new Chart('barChartTransaction', {
      type: 'bar',
      data: {
        labels: this.transactionDebit.map((item) => item.bulanTransaksi),
        datasets: [
          {
            label: 'Pendapatan',
            data: this.transactionDebit.map((item) => item.nominalTransaksi),
            backgroundColor: ['rgba(38, 168, 137, 1)'],
            borderWidth: 1,
          },
          {
            label: 'Pengeluaran',
            data: this.transactionKredit.map((item) => item.nominalTransaksi),
            backgroundColor: ['rgba(231, 26, 26, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom', // Adjust legend position as needed
            align: 'center',
          },
        },
      },
    });
  }
}
