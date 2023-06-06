import { Injectable, Inject } from '@nestjs/common';
import { IUserService } from './user';
import { Services } from 'src/utils/constants';
import { CreateUserDetails } from 'src/utils/type';

@Injectable()
export class UserService implements IUserService {
  constructor() {}
  createUser(userDetails: CreateUserDetails) {
    console.log('user service');
  }
}
