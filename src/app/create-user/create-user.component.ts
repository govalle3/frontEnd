import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CreateUserService } from './create-user.service';
import { UserModel } from '../model/user.model';
import { OK } from '../model/httpstatus';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [CreateUserService]
})

export class CreateUserComponent implements OnInit {

  public user: UserModel;
  public isValid: boolean = true;
  public message: string = "";

  constructor(private createUserService: CreateUserService, private router: Router) {
    this.user = new UserModel();
  }

  ngOnInit(): void {
  }

  public newUser(): void {

    this.isValid = this.createUserService.validate(this.user);

    if (this.isValid) {

      this.createUserService.newUser(this.user).subscribe(res => {

        if (res.responseCode == OK) {

          this.router.navigate(['/userComponent']);

        } else {

          this.message = res.message;
          this.isValid = false;

        }
      });
    }

    else {

      this.message = "Obligatory * fields";
      
    }
  }

}
