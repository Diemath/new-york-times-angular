import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'

import { INews } from './index';

@Injectable()
export class NewsService {
    baseUrl = 'http://localhost:5000';
    constructor (private http: HttpClient) {
    }

    getNews() : Observable<INews[]> {
        return this.http.get<INews[]>(this.baseUrl + '/list/arts').pipe(
            retry(1), catchError(error => {
              return throwError(error.message);
            }));      
    }
}