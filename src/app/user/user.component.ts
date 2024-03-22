import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ListUser } from './user';
import { UserService } from './user.service';
import { data } from 'jquery';
declare var $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  listUser: ListUser[] = [];

  constructor(private serviceListUser: UserService){ }


  ngOnInit(): void {
    this.serviceListUser.getListUser()
    .subscribe(data=>{
      this.listUser=data;
    })

    initFlowbite();
    $('#exampleTable').DataTable();
  }
}
