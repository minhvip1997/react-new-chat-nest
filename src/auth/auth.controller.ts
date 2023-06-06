import { Controller, Inject, Post, Get, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { Routes, Services } from '../utils/constants';
import { IAuthService } from './auth';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { IUserService } from 'src/user/user';

@Controller(Routes.AUTH)
export class AuthController implements IAuthService {
  constructor(
    @Inject(Services.AUTH) private authService: IAuthService,
    @Inject(Services.USERS) private userService: IUserService,
  ) {}
  validateUser() {}

  @Post('register')
  // @UsePipes(ValidationPipe)
  register(@Body('') createUserDto: CreateUserDto){
    console.log(createUserDto);
    this.userService.createUser(createUserDto)
  }
  
  @Post('login')
  login(){

  }
  
  @Get('status')
  status(){

  }

  @Post('logout')
  logout(){

  }
}
