import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import CreateUser from './dtos/create-user.dto';
import { User } from './user.schema';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private service: UsersService) { }
  @Query(() => [User])
  public async getAll() {
    return this.service.getAll();
  }

  @Mutation(() => User)
  public async createNewUser(@Args('user') user: CreateUser) {
    return this.service.create(user);
  }
}
