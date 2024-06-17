import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private auth: AuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isLoggedIn()) {
      this.router.navigate(['/browse']);
      return false;
    }
    return true; // User is logged in, allow access to the route
  }

  isLoggedIn(): boolean {
    const token = this.auth.getToken();
    if (token) {
      return true;
    }
    else{
      return false;
    }
  }
}