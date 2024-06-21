import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptor } from './authentication.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true }
];