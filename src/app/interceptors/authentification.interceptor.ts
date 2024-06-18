import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { AuthentificationService } from '../service/authentification/authentification.service';
import { inject } from '@angular/core';



export const authentificationInterceptor: HttpInterceptorFn = (req, next) => {
  if(typeof localStorage !== 'undefined'){
      const authentificationService=inject(AuthentificationService)
  const headers = new HttpHeaders()
  .append('Authorization', `Bearer ${authentificationService.getToken()}`);

  const authReq = req.clone({ headers });
  
  return next(authReq);
  }
  return next(req);

};
