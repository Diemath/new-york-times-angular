import { Component, OnInit } from '@angular/core';

import { INews, NewsService } from '../../services/news/index'

@Component({
    selector: 'news-list',
    templateUrl: './news-list.component.html'
})
export class NewsListComponent implements OnInit {
    newsList: INews[]

    constructor(private newsService: NewsService) {
    }

    ngOnInit() {
        this.newsService.getNews().subscribe(newsList =>  {
            this.newsList = newsList
        });
    }
}