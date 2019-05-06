import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchUser:string
  githubUsers:any
 apiUrl=environment.apiUrl
 access_token=environment.access_token

  constructor(private http:HttpClient) { }
 
  githubSearch(searchUser){
    let searchUrl=this.apiUrl+this.searchUser+'?access_token='+this.access_token
    this.searchUser = searchUser

    return this.http.get(searchUrl)
  }
}
