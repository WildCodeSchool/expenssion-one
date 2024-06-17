import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { AuthentificationService } from '../service/authentification/authentification.service';
import { inject } from '@angular/core';



export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authentificationService=inject(AuthentificationService)
  console.log('intercept')
  const headers = new HttpHeaders()
  .append('Authorization', `Bearer ${authentificationService.getToken()}`);

  const authReq = req.clone({ headers });
  
  return next(authReq);
};
