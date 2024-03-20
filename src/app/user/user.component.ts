import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
declare var $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
    $('#exampleTable').DataTable();
  }
}
