import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { CategoryPocket, TypePocket } from './categories';
import Chart from 'chart.js/auto';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  pocketCounts: TypePocket[] = [];
  pocketTabunganCounts: TypePocket[] = [];
  pocketPengeluaranCounts: TypePocket[] = [];
  pocketTypes: string[] = [];
  counts: number[] = [];
  pocketCategories: CategoryPocket[] = [];
  pocketCategoriesTabungan: CategoryPocket[] = [];
  pocketCategoriesPengeluaran: CategoryPocket[] = [];
  tabunganCategories: string[] = [];
  tabunganCounts: number[] = [];
  pengeluaranCategories: string[] = [];
  pengeluaranCounts: number[] = [];

  constructor(private services: CategoriesService) {}

  ngOnInit(): void {
    initFlowbite();
    this.services.getTypePocket().subscribe((data) => {
      this.pocketCounts = data;
      this.pocketTabunganCounts = data.filter(
        (item) => item.pocketType === 'Pocket Tabungan'
      );
      this.pocketPengeluaranCounts = data.filter(
        (item) => item.pocketType === 'Pocket Pengeluaran'
      );
      this.pocketTypes = data.map((item) => item.pocketType);
      this.counts = data.map((item) => item.count);

      this.createPieChart();
    });

    const tipePengeluaran = 'Pocket Pengeluaran';
    const tipeTabungan = 'Pocket Tabungan';
    this.services
      .getCategoryPocket(tipeTabungan)
      .subscribe((responseTabungan) => {
        // this.pocketCategories.push(...responseTabungan);
        this.pocketCategoriesTabungan = responseTabungan.sort((a, b) => b.count - a.count);
        this.tabunganCategories = responseTabungan.map(
          (item) => item.pocketName
        );
        this.tabunganCounts = responseTabungan.map((item) => item.count);

        this.createChartPocketTabungan();
      });

    this.services
      .getCategoryPocket(tipePengeluaran)
      .subscribe((responsePengeluaran) => {
        // this.pocketCategories.push(...responsePengeluaran);
        this.pocketCategoriesPengeluaran = responsePengeluaran.sort((a, b) => b.count - a.count);
        this.pengeluaranCategories = responsePengeluaran.map(
          (item) => item.pocketName
        );
        this.pengeluaranCounts = responsePengeluaran.map((item) => item.count);

        this.createChartPocketPengeluaran();
      });
  }

  createPieChart(): void {
    const ctx = document.getElementById(
      'pocketCategoriesChart'
    ) as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: this.pocketTypes,
          datasets: [
            {
              label: 'Jumlah Pocket',
              data: this.counts,
              backgroundColor: [
                'rgba(248, 171, 98, 1)', // Red color with opacity
                'rgba(247, 201, 53, 1)', // Blue color with opacity
                // Add more colors if needed
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              position: 'left', // Adjust legend position as needed
            },
          },
        },
      });
    } else {
      console.error('Canvas element not found.');
    }
  }

  createChartPocketTabungan() {
    new Chart('piechartPocketTabungan', {
      type: 'pie',
      data: {
        // labels: ['Rumah', 'Liburan', 'Pendidikan', 'Pensiun', 'Dana Darurat', 'Lainnya'],
        labels: this.tabunganCategories,
        datasets: [
          {
            label: 'Jumlah Pocket',
            // data: [12, 19, 3, 5, 2, 3],
            data: this.tabunganCounts,
            backgroundColor: [
              'rgba(0, 95, 123, 1)',
              'rgba(3, 111, 143, 1)',
              'rgba(43, 172, 180, 1)',
              'rgba(181, 212, 191, 1)',
              'rgba(201, 234, 212, 1)',
              'rgba(234, 246, 237, 1)',
            ],
            borderColor: [
              'rgba(0, 95, 123, 1)',
              'rgba(3, 111, 143, 1)',
              'rgba(43, 172, 180, 1)',
              'rgba(181, 212, 191, 1)',
              'rgba(201, 234, 212, 1)',
              'rgba(234, 246, 237, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom', // Adjust legend position as needed
            align: 'start',
          },
        },
      },
    });
  }

  createChartPocketPengeluaran() {
    new Chart('piechartPocketPengeluaran', {
      type: 'pie',
      data: {
        // labels: ['Makanan & Minuman', 'Kebutuhan Rumah', 'Tagihan & Utilitas', 'Transport', 'Shopping', 'Lainnya'],
        labels: this.pengeluaranCategories,
        datasets: [
          {
            label: 'Jumlah Pocket',
            // data: [12, 19, 3, 5, 2 , 3],
            data: this.pengeluaranCounts,
            backgroundColor: [
              'rgba(227, 96, 18, 1)',
              'rgba(245, 126, 13, 1)',
              'rgba(254, 163, 78, 1)',
              'rgba(252, 202, 156, 1)',
              'rgba(249, 224, 202, 1)',
              'rgba(253, 239, 227, 1)',
            ],
            borderColor: [
              'rgba(227, 96, 18, 1)',
              'rgba(245, 126, 13, 1)',
              'rgba(254, 163, 78, 1)',
              'rgba(252, 202, 156, 1)',
              'rgba(249, 224, 202, 1)',
              'rgba(253, 239, 227, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom', // Adjust legend position as needed
            align: 'start',
          },
        },
      },
    });
  }
}
