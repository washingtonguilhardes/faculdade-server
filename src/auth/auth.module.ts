import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/user.schema';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthService, AuthResolver],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ]
})
export class AuthModule { }
