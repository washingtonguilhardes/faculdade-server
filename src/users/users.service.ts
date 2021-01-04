import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import CreateUser from './dtos/create-user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async getAll() {
    return await this.userModel.find({});
  }

  async findOne(email: string) {
    return this.userModel.findOne({ email });
  }

  async create(createUserDto: CreateUser): Promise<User> {
    try {
      return await this.userModel.create(createUserDto);
    } catch (e) {
      throw e;
    }
  }
}
