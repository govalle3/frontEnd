import { UserService } from './user.service';

import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService) { }

  private users: Array<UserModel>;

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers(): void{
    

  }

}
