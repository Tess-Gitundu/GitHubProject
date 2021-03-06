import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {

  }


 getUser( username: string  ):any{
   const promise = new Promise((resolve, reject) => {
     resolve (this.http.get(`https://api.github.com/users/${username}`).toPromise())
   })
   return promise
 }
 getRepo( repository: string):any{
   const promise = new Promise((resolve, reject) => {
    resolve (this.http.get(`https://api.github.com/users/${repository}/repos`).toPromise())
   })
   return promise
 }
 
}
