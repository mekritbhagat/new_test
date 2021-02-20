import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// const baseUrl = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class AboutService {

  rootURL = '/api';
  constructor(private http: HttpClient) {}
  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Is it OK?');

    return of(confirmation);
  }

  getUsers() {
    return this.http.get(this.rootURL + '/users');
  }

  addUser(user: any) {
    return this.http.post(this.rootURL + '/user', {user});
  }
}
