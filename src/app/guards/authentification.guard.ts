import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthentificationService } from '../service/authentification/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {

  constructor(private authentificationSevice: AuthentificationService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(typeof localStorage !== 'undefined'){
      const token = this.authentificationSevice.getToken();
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