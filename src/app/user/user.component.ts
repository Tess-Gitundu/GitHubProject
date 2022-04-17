import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name = new FormControl('', Validators.required)

  user: any = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  
  
  }

  getPublicUsers(username: string){
    this.apiService.getUser(username).then((user:any)=>{
      this.user = user
      console.log(user);
      
    })
  }

  userSearch(){
    if(!this.name.valid){
      alert('The username is required')
    }
    let username =this.name.value
    this.getPublicUsers(username)
    return false;
  }

}
