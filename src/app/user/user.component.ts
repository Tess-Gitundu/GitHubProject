import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  this.getPublicUsers()
  }

  getPublicUsers(){
    this.apiService.getUser('Tess-Gitundu').then((user:any)=>{
      this.user = user
      console.log(user);
      
    })
  }

}
