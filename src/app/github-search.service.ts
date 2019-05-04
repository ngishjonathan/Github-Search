import { Injectable } from '@angular/core';
import {GithubSearch} from './github-search'

@Injectable()
export class GithubSearchService {
  getGithubsearch(){
    return GithubSearch;
  }
  constructor() {

  } 
}


