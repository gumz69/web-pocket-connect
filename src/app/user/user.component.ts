import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ListDetailUser, ListUser } from './user';
import { UserService } from './user.service';
import { data } from 'jquery';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  listUser: ListUser[] = [];
  listDetailUser: ListDetailUser [] = [];

  constructor(
    private serviceListUser: UserService
    ) { }
    
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  onDeleteUser(id: string) {
    this.serviceListUser.deleteUser(id).subscribe({
      next: (response) => {
        console.log('User deleted!');
        this.getAllNasabah(); // Refresh the user list
      },
      error: (error) => {
        console.error('Error deleting user!');
      }
    }
    );
  }

 
  getAllNasabah() {
    this.listUser = [];
    this.dtTrigger.next(this.listUser);
    this.serviceListUser.getListUser().subscribe(data => {
      this.listUser = data;
      this.dtTrigger.next(this.listUser);
    });

  }
  
  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.getAllNasabah();

    initFlowbite();
  }
  
}
