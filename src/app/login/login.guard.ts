import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(LoginService);
  return !auth.getAuth() ? router.navigate([""]) : true;
};
