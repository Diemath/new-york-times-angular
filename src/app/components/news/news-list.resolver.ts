import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { NewsService } from '../../services/news/index';

@Injectable()
export class NewsListResolver implements Resolve<any> {
    constructor (private newsService: NewsService) {
    }

    resolve() {
        return this.newsService.getNews()
    }
}