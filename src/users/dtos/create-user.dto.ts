import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class CreateUser {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

}
