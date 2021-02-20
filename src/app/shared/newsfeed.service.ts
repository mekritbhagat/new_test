import { Injectable } from '@angular/core';
import { Observable, EMPTY, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
import { share, exhaustMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NewsFeedService {
    rootURL = '/api';

    loadNews$ = '';
    refresh$ = new BehaviorSubject(null);
    news$ = this.refresh$.pipe(
        exhaustMap(() => this.loadNews$)
    );
    constructor(private http: HttpClient) {}

  
    getUsers() {
      return this.http.get(this.rootURL + '/users');
    }
  
    addUser(user: any) {
      return this.http.post(this.rootURL + '/user', {user});
    }

    // news$: Observable<News[]> = this.http.get('/').pipe(
    //     map(res => res.json()),
    //     catchError(err => {
    //         console.log('');
    //         return EMPTY;
    //     }),
    //     share(),
    // );

    getTopHeadlines() {
        return this.http.get('');
    }

    getNewsBySource(source) {
        return this.http.get('');
    }

    getSources() {
        return this.http.get('');
    }

}

export interface News {
    title: string;
}