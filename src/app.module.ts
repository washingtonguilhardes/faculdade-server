import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    UsersModule,
    AuthModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true
    }),
    MongooseModule.forRoot(
      'mongodb://fauldadeappadmin:fauldadeappadminpwd@localhost:27017/faculdadeapp'
    )
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
