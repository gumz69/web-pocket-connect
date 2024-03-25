import { Component, OnInit, viewChild } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrl: './edit-user.component.css',
})
export class EditUserComponent implements OnInit {
    nasabah: User = {} as User;
    errorMessage: string | undefined;

    constructor(
        private formBuilder: FormBuilder,
        private httpClient: HttpClient,
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService
    ) { }


    navigateToUserPage() {
        this.router.navigate(['/user']);
    }

    ngOnInit(): void {
    // initFlowbite();

        const id = Number(this.route.snapshot.paramMap.get('id'))
        console.log(id);
        if (id) {
            this.userService.getUserDetail(id).subscribe({
            next: (data) => this.nasabah = data,
            error: (error) => this.errorMessage = error.message
            });
        }
   
    }

    onUpdateUser() {
        this.userService.updateUser(this.nasabah).subscribe({
            next: () => this.router.navigate(['/user']),
            error: (error) => this.errorMessage = error.message
          });
    }
}
