import { Controller, Get, Post, Body, HttpException } from '@nestjs/common';
import { UserRepository, User } from './user-repository';

@Controller('users')
export class UsersController {
    constructor(private readonly userRepository: UserRepository) {}

    @Get()
    findAll() : User[] {
        return this.userRepository.findAll();
    }

    @Post()
    createUser(@Body() user: User) {
        if(!user.name) {
            throw new HttpException('enter the name', 422);
        }
        return this.userRepository.create(user);
    }

    @Get('count')
    count() {
        return this.userRepository.count();
    }


}
