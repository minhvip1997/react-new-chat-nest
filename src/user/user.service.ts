import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { IUserService } from './user';
import { Services } from 'src/utils/constants';
import { CreateUserDetails, FindUserParams } from 'src/utils/type';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/utils/typeorm';
import { Repository } from 'typeorm';
import { hasPassword } from 'src/utils/helpers';
import { log } from 'console';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(userDetails: CreateUserDetails) {
    const existingUser = await this.userRepository.findOneBy({
      email: userDetails.email,
    });
    if (existingUser) {
      throw new HttpException('User already Exist', HttpStatus.CONFLICT);
    }
    const password = await hasPassword(userDetails.password);
    const newUser = this.userRepository.create({ ...userDetails, password });
    return this.userRepository.save(newUser);
  }

  async findUser(findUserParams: FindUserParams): Promise<User> {
    return this.userRepository.findOneBy(findUserParams);
  }
}
