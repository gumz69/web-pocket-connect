import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrl: './list-transaction.component.css'
})
export class ListTransactionComponent implements OnInit {
  ngOnInit(): void {
    $('#exampleTable').DataTable();
  }
}
