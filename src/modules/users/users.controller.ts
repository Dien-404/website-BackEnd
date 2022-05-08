import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.usersService.getUsers();
  }

  @Get(':uid')
  getUser(@Param('uid') uid: number) {
    return this.usersService.getUser(uid);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Patch(':uid')
  updateUser(@Param('uid') uid: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(uid, updateUserDto);
  }

  @Delete(':uid')
  removeUser(@Param('uid') uid: number) {
    return this.usersService.removeUser(uid);
  }
}
