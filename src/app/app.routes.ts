import { Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { 
  NewsListComponent,
  NewsListResolver
} from './components/news/index'

export const ROUTES: Routes = [
  { path: '', component: AppComponent },
  { path: 'callback', component: AppComponent },
  { 
    path: 'news', 
    component: NewsListComponent, 
    resolve: { newsList: NewsListResolver } 
  },
  { path: '**', redirectTo: '' }
];
