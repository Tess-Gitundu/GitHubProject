import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repo: any = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  getPublicRepos(repository: string){
    this.apiService.getRepo(repository).then((repo:any)=>{
      this.repo = repo
      console.log(repo);
      
    })
  }

}
