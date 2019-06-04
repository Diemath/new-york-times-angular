import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { INews } from '../../services/news/index'

@Component({
    selector: 'news-list',
    templateUrl: './news-list.component.html'
})
export class NewsListComponent implements OnInit {
    newsList: INews[]

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.newsList = this.route.snapshot.data['newsList']
    }
}