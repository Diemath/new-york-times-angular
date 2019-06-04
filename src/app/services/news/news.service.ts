import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { INews } from './index';

@Injectable()
export class NewsService {
    constructor (private http: HttpClient) {
    }

    getNews() : Observable<INews[]> {
        return this.http.get<INews[]>('/api/');
    }
}