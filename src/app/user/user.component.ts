import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ListDetailUser, ListUser } from './user';
import { UserService } from './user.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PopupDeleteUserComponent } from '../components/popup-delete-user/popup-delete-user.component';
import { MatDialog } from '@angular/material/dialog';

declare let $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  listUser: ListUser[] = [];
  listDetailUser: ListDetailUser[] = [];

  // constructor(private serviceListUser: UserService) {}

  constructor(
    private serviceListUser: UserService,
    public dialog: MatDialog
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
      },
    });
  }

  getAllNasabah() {
    this.listUser = [];
    this.dtTrigger.next(this.listUser);
    this.serviceListUser.getListUser().subscribe((data) => {
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
  openPopUp(){
    this.dialog.open(PopupDeleteUserComponent,{
      // width: '60%',
      // height: '400px'
    })
    // this.showConfirmationModalTerima = true
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupDeleteUserComponent, {
      width: '250px', // Sesuaikan dengan lebar pop-up yang diinginkan
      // Tambahkan opsi lainnya sesuai kebutuhan Anda
    });

    // Anda juga bisa menangani hasil dari dialog jika diperlukan
    dialogRef.afterClosed().subscribe(result => {
      // Lakukan sesuatu dengan result jika perlu
      // this.result
    });
  }

    createPinjamanAndChangeStatus() {
    
        console.error("Form data is not loaded.");
      
    };
  showConfirmationModalTerima = false;
  terima(confirmed: boolean) {
    if (confirmed) {
      this.createPinjamanAndChangeStatus()
      console.log('Action confirmed');
    } else {
      // Cancel the action
      console.log('Action cancelled');
    }
    this.showConfirmationModalTerima = true;
  }
  
}