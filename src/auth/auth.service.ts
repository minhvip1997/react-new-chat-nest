import { Injectable, Inject } from '@nestjs/common';
import { IAuthService } from './auth';
import { Services } from 'src/utils/constants';
import { IUserService } from 'src/user/user';

@Injectable()
export class AuthService implements IAuthService {
  constructor(@Inject(Services.USERS) private userService: IUserService) {}
  validateUser() {}
}
