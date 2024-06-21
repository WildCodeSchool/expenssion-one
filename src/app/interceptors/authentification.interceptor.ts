import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { AuthenticationService } from '../service/authentication/authentification.service';
import { inject } from '@angular/core';



export const AuthenticationInterceptor: HttpInterceptorFn = (req, next) => {
  if(typeof localStorage !== 'undefined'){
      const authenticationService=inject(AuthenticationService)
  const headers = new HttpHeaders()
  .append('Authorization', `Bearer ${authenticationService.getToken()}`);

  const authReq = req.clone({ headers });
  
  return next(authReq);
  }
  return next(req);

};
