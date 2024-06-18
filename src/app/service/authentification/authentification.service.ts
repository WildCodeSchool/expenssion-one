import { Injectable, inject } from '@angular/core';
import { User } from '../../model/user/user';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  static getToken() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  http=inject(HttpClient)
  url=environment.apiUrl
  private isLoginSubject: BehaviorSubject<any> = new BehaviorSubject<boolean>(typeof localStorage !== 'undefined'&& localStorage.getItem('token')!==null )

  isLogin$: Observable<any> = this.isLoginSubject.asObservable();



 

login(username: string, password: string): Observable<any> {
    this.isLoginSubject.next(localStorage.getItem('token') !== null);
    const params = new HttpParams().set('password',password).set('username',username)
    return this.http.post(this.url+'/login',{},{params} );

    }

  logout():void{
      localStorage.removeItem('token')
  }

changePassword(password: string): Observable<any> {

      const body = { password };
      return this.http.post(this.url+'/changePassword', body).pipe(map((x:any)=>x.message));
    }

deleteAccount(password:string):Observable<any>{
  console.log('delete')
  const params = new HttpParams().set('password',password)
  return this.http.put(this.url+'/deleteAccount',{},{params})
}


setToken(token: string): void {
  localStorage.setItem('token',token);
  this.isLoginSubject.next(true);
}

getToken(): any {
  return localStorage.getItem('token');
}

removeToken():void{
  localStorage.removeItem('token')
  this.isLoginSubject.next(false);
}


register(user: User): Observable<any> {  
    return this.http.post<User>(this.url+'/register', user)
}


getUserData(): Observable<any> {

  return this.http.get(this.url+'/user/');
}





}

