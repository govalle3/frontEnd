import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private users: Array<UserModel>;
  public getUsers(): Array<UserModel>{
    this.http.get("http://localhost:8080/findUsers").subscribe(res=>{
      this.users = res as UserModel[];
      console.log(this.users());
    });
    return this.users;
  }
}