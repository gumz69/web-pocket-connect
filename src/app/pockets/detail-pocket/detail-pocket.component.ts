import { Component, OnInit } from '@angular/core';
import { initDropdowns, initFlowbite } from 'flowbite';
declare var $: any;
@Component({
  selector: 'app-detail-pocket',
  templateUrl: './detail-pocket.component.html',
  styleUrl: './detail-pocket.component.css'
})
export class DetailPocketComponent implements OnInit {

  ngOnInit(): void {
    initFlowbite();
    $('#exampleTable').DataTable();
  }
}
