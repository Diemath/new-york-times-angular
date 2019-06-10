import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav/nav-bar.component';

import {
  NewsListComponent,
  NewsThumbnailComponent,
  NewsService
} from './components/news/index'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NewsListComponent,
    NewsThumbnailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
