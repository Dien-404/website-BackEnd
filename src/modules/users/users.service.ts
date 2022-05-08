import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      uid: 1,
      user_name: 'user_name.show1',
      email: 'email.show1',
      user_type: 'user_type.show1',
    },
    {
      uid: 2,
      user_name: 'user_name.show2',
      email: 'email.show2',
      user_type: 'user_type.show2',
    },
    {
      uid: 3,
      user_name: 'user_name.show3',
      email: 'email.show3',
      user_type: 'user_type.show3',
    },
  ];

  getUsers() {
    return this.users;
  }

  getUser(uid: number) {
    const user = this.users.find((item) => item.uid === +uid);
    if (!user) {
      throw new NotFoundException(`user ${uid} not found`);
    }
    return user;
  }

  createUser(createUserDto: any) {
    this.users.push(createUserDto);
    return createUserDto;
  }

  updateUser(uid: number, updateUserDto: any) {
    const existingUser = this.getUser(uid);
    if (existingUser) {
      // updating the user data
      return `user ${uid} found`;
    }
  }

  removeUser(uid: number) {
    const userIndex = this.users.findIndex((item) => item.uid === +uid);
    if (userIndex >= 0) {
      this.users.splice(userIndex, 1);
    }
  }
}
