import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entity/user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(data: CreateUserDTO) {
    console.log(data);

    const user = new this.userModel(data).save();
    return user;
  }
}
