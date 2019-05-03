import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubsearchDetailsComponent } from './githubsearch-details/githubsearch-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    GithubsearchDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
