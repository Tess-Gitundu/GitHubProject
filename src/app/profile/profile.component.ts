import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  author:any;
  
  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`https://api.github.com/users/Tess-Gitundu`)
    .subscribe(Response => {
      console.log(Response);
      this.author = Response;
    })
  }


}
