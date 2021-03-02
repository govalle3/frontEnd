import {UserEntity} from './userEntity.model';

export class UserModel extends UserEntity {
    public firstName: string;
    public lastName: string;
    public dob: Date;
    
}