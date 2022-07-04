import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userServie: UserService) {}
  @Post('/signup')
  createUser(@Body() body: CreateUserDTO) {
    this.userServie.createUser(body);
  }
}
