import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { JsonService } from '../../api/jsonservice.service';
Chart.register(...registerables);
@Component({
  selector: 'app-grafik',
  templateUrl: './grafik.component.html',
  styleUrl: './grafik.component.css',
})
export class GrafikComponent implements OnInit {
  constructor(private service: JsonService) {}
  chartdata: any;
  banyakPocket: any[] = [];
  bulanPocket: any[] = [];

  ngOnInit(): void {
      // input code api get jumlah pocket
      this.renderBarChart();
  }

  renderBarChart() {
    new Chart('barchart', {
      type: 'bar',
      data: {
        labels: [
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
        ],
        datasets: [
          {
            label: 'Jumlah Pocket',
            data: [12, 19, 3, 5, 2, 3, 7, 8, 10, 15, 9, 20],
            borderWidth: 0,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });
  }
}
