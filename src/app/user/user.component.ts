import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ListDetailUser, ListUser } from './user';
import { UserService } from './user.service';
import { data } from 'jquery';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserModule } from './user.module';

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
    private serviceListUser: UserService,
    private httpClient: HttpClient) { }
    
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  gender = [
    { id: 'Pria', value: 'Pria' },
    { id: 'Wanita', value: 'Wanita' },
  ]

  onDeleteUser(id: string) {
    this.httpClient.delete('http://localhost:8080/api/nasabah/' + id).subscribe();
    this.getAllNasabah();
  }

 
  getAllNasabah() {
    this.serviceListUser.getListUser().subscribe(data => {
      this.listUser = data;
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
