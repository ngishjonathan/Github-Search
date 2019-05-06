import { Component, OnInit } from '@angular/core'
import {SearchService} from '../search.service'
@Component({
  selector: 'app-githubsearch-form',
  templateUrl: './githubsearch-form.component.html',
  styleUrls: ['./githubsearch-form.component.css'],
  providers:[SearchService]
})
export class GithubsearchFormComponent implements OnInit {

  constructor( private searchservice:SearchService) { }
  users:any
  searchUsers:any
  githubSearch(){
    this.searchservice.githubSearch(this.searchUsers).subscribe(data=>{
      this.users = data
      console.log(this.users)
    })
  }

  ngOnInit() {
  }

}

