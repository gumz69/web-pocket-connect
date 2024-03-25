import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { pocket } from './detail-pocket';
import { Subject } from 'rxjs';
import { DetailPocketService } from './detail-pocket.service';

@Component({
  selector: 'app-detail-pocket',
  templateUrl: './detail-pocket.component.html',
  styleUrl: './detail-pocket.component.css',
})
export class DetailPocketComponent implements OnInit {
  listPockets: pocket[] = [];
  selectedFilter: string = 'all';
  constructor(private services: DetailPocketService) {}

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  ngOnInit(): void {
    initFlowbite();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.fetchListPocket();
  }

  fetchListPocket(): void {
    this.selectedFilter = 'all';
    this.listPockets = [];
    this.dtTrigger.next(this.listPockets);
    this.services.getListPocket().subscribe((pockets: pocket[]) => {
      this.listPockets = pockets;
      this.dtTrigger.next(this.listPockets);
    });
  }

  filteredByTabungan(): void {
    this.selectedFilter = 'tabungan';
    this.listPockets = [];
    this.dtTrigger.next(this.listPockets);
    this.services.getListPocketByTabungan().subscribe((pockets: pocket[]) => {
      this.listPockets = pockets;
      this.dtTrigger.next(this.listPockets);
    });
  }

  filteredByPengeluaran(): void {
    this.selectedFilter = 'pengeluaran';
    this.listPockets = [];
    this.dtTrigger.next(this.listPockets);
    this.services.getListPocketByPengeluaran().subscribe((pockets: pocket[]) => {
      this.listPockets = pockets;
      this.dtTrigger.next(this.listPockets);
    });
  }
}
