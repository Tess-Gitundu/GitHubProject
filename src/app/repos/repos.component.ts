import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos = new FormControl('', Validators.required)

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

  repoSearch(){
    if(!this.repos.valid){
      alert('The repository name is required')
    }
    let username =this.repos.value
    this.getPublicRepos(username)
    return false;
  }

}
