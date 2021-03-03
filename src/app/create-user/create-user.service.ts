import { Observable   } from 'rxjs';
import { Injectable   } from '@angular/core';
import { HttpClient   } from "@angular/common/http";

import { UserModel    } from './../model/user.model';
import { RestResponse } from '../model/restResponse.model';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http:HttpClient) { }


  /**
   * Method that validate obligatory fields
   * @param user
   */
  public validate(user: UserModel): boolean{
    let isValid = true;

    if(!user.firstName){
      isValid = false;
    }
    if(!user.lastName){
      isValid = false;
    }
    if(!user.nationalId){
      isValid = false;
    }
    if(!user.dob){
      isValid = false;
    }
    return isValid;

  }

  public newUser(user: UserModel): Observable<RestResponse> {
    return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdate",JSON.stringify(user));
  }
}
