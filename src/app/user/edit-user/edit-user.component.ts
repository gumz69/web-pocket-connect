import { ChangeDetectorRef, Component, OnInit, viewChild } from '@angular/core';
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
    nasabah: any = null;
    
    id?: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService,
        private cdr: ChangeDetectorRef
    ) { }


    navigateToUserPage() {
        this.router.navigate(['/user']);
    }

    ngOnInit(): void {
    // initFlowbite();

        this.id = Number(this.route.snapshot.paramMap.get('id'))
        console.log('ID:', this.id);
        if (this.id) {
            this.userService.getUserDetail(this.id).subscribe({
            next: (data: User) => {
                // console.log('Data Nasabah:', data);
                this.nasabah = data
                this.cdr.detectChanges();
            },
            error: (error) => {
                // console.error("Error:", error); // Log the error response
                if (error.status === 401) {
                  // Unauthorized error
                  console.log("Unauthorized error");
                  localStorage.removeItem("token");
                }
              }
            });
        }
   
    }

    onUpdateUser() {
        this.userService.updateUser(this.nasabah).subscribe({
            next: () => {
                console.log('User updated successfully');
                this.router.navigate(['/user']); // Redirect to user detail page after update
              },
              error: (error) => {
                console.error("Error:", error);
              }
          });
    }
}
