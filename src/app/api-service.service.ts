import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  getUsername(username:string){
    return username;
  }
  getRepo(username: string): any{
    return this.http.get(`https://api.github.com/users/${username}/repos`)
  }
}
