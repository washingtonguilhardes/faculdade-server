import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { User, UserSchema } from './user.schema';
import { UsersService } from './users.service';

describe('UsersService', () => {
  it('should create new user', async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
      imports: [
        MongooseModule.forRoot(
          'mongodb://fauldadeappadmin:fauldadeappadminpwd@localhost:27017/faculdadeapp'
        ),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
      ]
    }).compile();

    const service = module.get<UsersService>(UsersService);
    const user = await service.create({
      email: 'junior@gmail.com',
      name: 'Washington',
      password: '123123123'
    });
    debugger;
  });
});
