import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string="https://localhost:5001/api/users"
  user:User[];
  userInst:User;

  constructor(private http:HttpClient) { }

  getAllUsers(){
     this.http.get(this.url).toPromise().then(
       res=>{
         this.user=res as User[];
       }
     )
  }
  postUser(){

    return this.http.post(this.url,this.userInst);

  }
}
