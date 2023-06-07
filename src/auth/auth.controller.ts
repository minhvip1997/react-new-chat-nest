import {
  Controller,
  Inject,
  Post,
  Get,
  Body,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { Routes, Services } from '../utils/constants';
import { IAuthService } from './auth';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { IUserService } from 'src/user/user';
import { instanceToPlain } from 'class-transformer';
import { LocalAuthGuard } from './utils/Guards';

@Controller(Routes.AUTH)
export class AuthController implements IAuthService {
  constructor(
    @Inject(Services.AUTH) private authService: IAuthService,
    @Inject(Services.USERS) private userService: IUserService,
  ) {}
  validateUser() {}

  @Post('register')
  async register(@Body('') createUserDto: CreateUserDto){
    // console.log(createUserDto);
    return instanceToPlain(await this.userService.createUser(createUserDto))
  }
  
  @UseGuards(LocalAuthGuard)
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
