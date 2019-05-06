import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AlertsService} from './alert-service/alerts.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubsearchDetailsComponent } from './githubsearch-details/githubsearch-details.component';
import { GithubsearchFormComponent } from './githubsearch-form/githubsearch-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    GithubsearchDetailsComponent,
    GithubsearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
    
  ],
  providers:[AlertsService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
