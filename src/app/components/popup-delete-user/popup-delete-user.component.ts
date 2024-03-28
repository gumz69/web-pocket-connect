import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-popup-delete-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './popup-delete-user.component.html',
  styleUrl: './popup-delete-user.component.css'
})
export class PopupDeleteUserComponent implements OnInit{
  constructor(
    private httpClient: HttpClient,
    public dialogRef: MatDialogRef<PopupDeleteUserComponent>
  ){}
  @Input() data: string='';
  ngOnInit(): void {
    console.log(this.data)
  }

  
  
  @Output() confirmed = new EventEmitter<boolean>();

  confirm() {
    this.confirmed.emit(true);
  }

  cancel() {
    this.confirmed.emit(false);
  }
result: string = '';
confirmAction() {

  // this.result = '1';
  console.log(this.data);
  // Di sini Anda dapat menambahkan logika atau tindakan yang ingin Anda jalankan saat tombol diklik
}
cancelAndClosePopup(): void {
  this.dialogRef.close();
}

  // @Output() delete: EventEmitter<string> = new EventEmitter<string>();

  // // id: string;         

  // onDeleteUser(id: string) {
  //   this.httpClient.delete('http://localhost:8080/api/nasabah/' + id).subscribe();
  // }

}
