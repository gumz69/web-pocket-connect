import { Component, OnInit } from '@angular/core';
import { PocketService } from './table.service';
import { Pocket } from '../detail-pocket/detail-pocket';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  listPockets: Pocket[] = [];
  selectedFilter: string = 'all';
  constructor(private services: PocketService) {}

  ngOnInit(): void {
    this.fetchTopPocket();
  }

  fetchTopPocket() {
    this.services.getListTopPocket().subscribe((pockets: Pocket[]) => {
      this.listPockets = pockets;
    });
  }
}
