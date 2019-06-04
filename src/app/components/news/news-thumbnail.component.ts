import { Component, Input } from "@angular/core";

import { INews } from '../../services/news/index';

@Component({
    selector: 'news-thumbnail',
    templateUrl: './news-thumbnail.component.html',
    styles: [`
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})
export class NewsThumbnailComponent {
    @Input() news: INews
}