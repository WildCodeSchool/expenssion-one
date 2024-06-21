import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../service/authentication/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authenticationSevice: AuthenticationService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(typeof localStorage !== 'undefined'){
      const token = this.authenticationSevice.getToken();
    if (token) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
    }
    else{
      this.router.navigateByUrl('/');
      return false}
    
  }
}