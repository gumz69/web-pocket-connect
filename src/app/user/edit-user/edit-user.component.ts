import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
})
export class EditUserComponent implements OnInit {
  nasabah: any = null;

  id?: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  navigateToUserPage() {
    this.router.navigate(['/user']);
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID:', this.id);
    if (this.id) {
      this.userService.getUserDetail(this.id).subscribe({
        next: (data: User) => {
          this.nasabah = data;
          this.cdr.detectChanges();
        },
        error: (error) => {
          if (error.status === 401) {
            console.log('Unauthorized error');
            localStorage.removeItem('token');
          }
        },
      });
    }
  }

  onUpdateUser() {
    this.userService.updateUser(this.nasabah).subscribe({
      next: () => {
        console.log('User updated successfully');
        this.router.navigate(['/user']);
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }
}
