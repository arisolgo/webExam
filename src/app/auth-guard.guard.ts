import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})


export class AuthGuardGuard implements CanActivate {
  

  constructor(private router:Router, private authService:AuthService) {}

  canActivate(): boolean  {
    if (this.authService.authentication() ) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  
}
