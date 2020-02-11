import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserRepository } from './user-repository';

@Module({
  controllers: [UsersController],
  providers: [UserRepository]
})
export class UsersModule {}
