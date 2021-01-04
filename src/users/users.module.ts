import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';

@Module({
  providers: [UsersService, UsersResolver],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ]
})
export class UsersModule { }
