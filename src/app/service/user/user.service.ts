import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  http=inject(HttpClient)
  url=environment.apiUrl

  constructor() { }


  getUserData(): Observable<User> {
  return this.http.get<User>(this.url+'/profil');
}

deleteUser(password:string): Observable<string> {
  const params = new HttpParams().set('password',password)
   const options = { params, responseType: 'text' as 'json' };
  return this.http.delete<string>(this.url+'/delete', options);
}

updatePersonalData(firstname:string,lastname:string,email:string,dateOfBirth:string): Observable<User> {
  const params = new HttpParams().set('firstname',firstname).set('lastname',lastname).set('email',email).set('dateOfBirth',dateOfBirth)
  return this.http.post<User>(this.url+'/updatePersonnalData', {}, {params});
}

changePassword(oldPassword:string,newPassword:string): Observable<User> {
  const params = new HttpParams().set('oldPassword',oldPassword).set('newPassword',newPassword)
  return this.http.post<User>(this.url+'/changePassword', {}, {params});
}

updateBiography(biography:string): Observable<User> {
  const params = new HttpParams().set('biography',biography)
  return this.http.post<User>(this.url+'/updateBiography', {}, {params});
}


updateDisplayPseudo(displayPseudo:string): Observable<User> {
  const params = new HttpParams().set('displayPseudo',displayPseudo)
  return this.http.post<User>(this.url+'/updateDisplayPseudo', {}, {params});
}

updateProfilPicture(profilPictureUrl:string): Observable<User> {
  const params = new HttpParams().set('profilPictureUrl',profilPictureUrl)
  return this.http.post<User>(this.url+'/updateProfilPicture', {}, {params});
}

updatepamarater(isPublic :boolean,isNewsletter:boolean): Observable<User> {
  const params = new HttpParams().set('isPublic',isPublic).set('isNewsletter',isNewsletter)
  return this.http.post<User>(this.url+'/updateParameters', {}, {params});
}
}