import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/controllers/users/dtos/CreateUser.dto';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Kreso', email: 'kreso@gmail.com' },
    { username: 'Someone', email: 'someone@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserDto) {
    this.fakeUsers.push(userDetails);
    return;
  }

  fetchUserById(id: number) {
    return null;
  }
}
