import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return 'this action get all users';
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return `this action get only one user and the uid is ${id}`;
  }
}
