import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import 'rxjs/Rx';
import { User } from './login.modal';
// import * as auth0 from 'auth0-js';

const api = '/api';

export class AuthService {
  isLoggedIn = false;

  redirectUrl: string;

  accessToken: String;
  expiresAt: Number;
  user$: Observable<User>;
  // auth0 = new auth0.WebAuth({
  //   clientID: 'AAQbG8REMxtSrmXQiPGcl3Uochf7OuHS',
  //   domain: 'bk-tmp.auth0.com',
  //   responseType: 'token',
  //   redirectUri: 'http://localhost:4200/',
  //   scope: 'openid'
  // });

  constructor(public router: Router, private http: HttpClient) {
    // this.user$ = this.serv.authState.switchMap(user => {
    //   if (user) {
    //     return this.value.doc<User>(`users/${user.uid}`).valueChanges();
    //   } else {
    //     return Observable.of(null);
    //   }
    // })
  }

  // public login1(): void {
  //   this.auth0.authorize();
  // }

  // public handleAuthentication(): void {
  //   this.auth0.parseHash((err, authResult) => {
  //     if (authResult && authResult.accessToken) {
  //       window.location.hash = '';
  //       this.accessToken = authResult.accessToken;
  //       this.expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
  //       this.router.navigate(['/dashboard']);
  //     } else if (err) {
  //       this.router.navigate(['/']);
  //       console.log(err);
  //     }
  //   });
  // }

  public logout1(): void {
    // Remove tokens and expiry time from localStorage
    this.accessToken = null;
    this.expiresAt = null;
    // Go back to the home route
    this.router.navigate(['/']);
  }

  logout2() {
    return this.http.get(`${api}/logout`);
  }

  getProfile() {

  }

  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) return false;
    for (const role of allowedRoles) {
      if (user.roles[role]) {
        return true;
      }
    }
    return false;
  }

  canRead(user: User): boolean {
    const allowed = ['admin', 'editor', 'reader'];
    return this.checkAuthorization(user, allowed);
  }

  canEdit(user: User): boolean {
    const allowed = ['admin', 'editor'];
    return this.checkAuthorization(user, allowed);
  }

  canDelete(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

  getRole(role) {
    return;
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    return new Date().getTime() < this.expiresAt;
  }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}

