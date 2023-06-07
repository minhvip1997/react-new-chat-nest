import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { IAuthService } from './auth';
import { Services } from 'src/utils/constants';
import { IUserService } from 'src/user/user';
import { ValidateUserDetails } from 'src/utils/type';
import { comparehash } from 'src/utils/helpers';

@Injectable()
export class AuthService implements IAuthService {
  constructor(@Inject(Services.USERS) private userService: IUserService) {}
  async validateUser(userDetail: ValidateUserDetails) {
    const user = await this.userService.findUser({ email: userDetail.email });
    console.log(55555, user);
    
    if (!user) {
      throw new HttpException('Invalid Credential', HttpStatus.UNAUTHORIZED);
    }

    return comparehash(userDetail.password, user.password)
  }
}
