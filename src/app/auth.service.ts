import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) { }

  authToken:any;
  signUp( user: any ){

    const authData = {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    }

    return this.http.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBpAQggcWe9qGccSNckBmloUZyMXHpkpYs', 
      authData)
      .pipe(
      map( resp => {
        this.saveToken( resp['idToken'] );
        return resp;
      })
    );

  }

  logIn( user: any ){

    const authData = {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    }

    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBpAQggcWe9qGccSNckBmloUZyMXHpkpYs', 
      authData
    ).pipe(
      map( resp => {
        this.saveToken( resp['idToken'] );
        return resp;
      })
    );

  }

  authentication(){
    if (this.authToken)
    return true

    else 
    return false;
  }

  private saveToken( idToken: string ) {

    this.authToken = idToken;
    localStorage.setItem('token', idToken);

  }

  readToken() {

    if ( localStorage.getItem('token') ) {
      this.authToken = localStorage.getItem('token');
    } else {
      this.authToken = '';
    }

    return this.authToken;

  }



}
