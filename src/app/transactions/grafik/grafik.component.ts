import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { TransactionChart } from '../transactions';
import { TransactionsService } from '../transactions.service';
@Component({
  selector: 'app-grafik',
  templateUrl: './grafik.component.html',
})
export class GrafikComponent implements OnInit {
  transactionChart: TransactionChart[] = [];
  transactionDebit: TransactionChart[] = [];
  transactionKredit: TransactionChart[] = [];

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
    const getMonthName = (monthNumber: number): string => {
      const monthNames = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
      ];
      return monthNames[monthNumber - 1];
    };

    new Chart('barChartTransaction', {
      type: 'bar',
      data: {
        labels: this.transactionDebit.map((item) => `${getMonthName(Number(item.bulanTransaksi))} ${item.tahunTransaksi}`),
        datasets: [
          {
            label: 'Pendapatan',
            data: this.transactionDebit.map((item) => item.nominalTransaksi),
            backgroundColor: ['rgba(38, 168, 137, 1)'],
            barThickness: 60,
          },
          {
            label: 'Pengeluaran',
            data: this.transactionKredit.map((item) => item.nominalTransaksi),
            backgroundColor: ['rgba(231, 26, 26, 1)'],
            barThickness: 60,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: {
                size: 20,
              },
            }
          },
        },
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10
          }
      }
      },
    });
  }
}
