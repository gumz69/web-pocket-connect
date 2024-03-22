import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrl: './edit-user.component.css',
})
export class EditUserComponent implements OnInit {
    ngOnInit(): void {
        initFlowbite();
    }
}