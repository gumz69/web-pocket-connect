import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { PocketChart } from './grafik';
import { GrafikService } from './grafik.service';
Chart.register(...registerables);
@Component({
  selector: 'app-grafik',
  templateUrl: './grafik.component.html',
})
export class GrafikComponent implements OnInit {
  chartdata: PocketChart[] = [];
  banyakPocket: any[] = [];
  bulanPocket: any[] = [];

  constructor(private services: GrafikService) {}

  ngOnInit(): void {
    this.services.getPocketChart().subscribe((data) => {
      this.chartdata = data.sort((a, b) => a.bulanPembuatan - b.bulanPembuatan);

      this.renderBarChart();
    });
  }

  renderBarChart() {
    const getMonthName = (monthNumber: number): string => {
      const monthNames = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember',
      ];
      return monthNames[monthNumber - 1];
    };

    new Chart('barchart', {
      type: 'bar',
      data: {
        labels: this.chartdata.map(
          (item) =>
            `${getMonthName(Number(item.bulanPembuatan))} ${
              item.tahunPembuatan
            }`
        ),
        datasets: [
          {
            label: 'Jumlah Pocket',
            data: this.chartdata.map((item) => item.jumlahPocket),
            borderWidth: 0,
            barThickness: 40,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: {
                size: 16,
              },
            },
          },
        },
      },
    });
  }
}
