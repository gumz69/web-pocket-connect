import { Component, OnInit, viewChild } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { UserComponent } from '../user.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { ListDetailUser } from '../user';


@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrl: './edit-user.component.css',
})
export class EditUserComponent implements OnInit {
    usersId!: any;
    user!: any;
    listDetailUser: ListDetailUser[] = [];
    constructor(
        private formBuilder: FormBuilder,
        private httpClient: HttpClient,
        private router: Router,
        private route: ActivatedRoute,
        private detailUser: UserService
    ) { }


    navigateToUserPage() {
        this.router.navigate(['/user']);
    }

    ngOnInit(): void {
    initFlowbite();
   
    }
}
