import { Component, OnInit } from '@angular/core';
import { PocketService } from './table.service';
import { pocket } from '../detail-pocket/detail-pocket';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  listPockets: pocket[] = [];
  selectedFilter: string = 'all';
  constructor(private services: PocketService) {}


  ngOnInit(): void {
    this.fetchTopPocket();
  }


  fetchTopPocket() {
    this.services.getListTopPocket().subscribe((pockets: pocket[]) => {
      this.listPockets = pockets;
    });
  }

}
