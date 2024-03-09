import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  registerUser(
    @Body()
    {
      username,
      password,
      email,
      name,
    }: {
      username;
      password;
      email;
      name: string;
    },
  ) {
    return this.userService.createUser(username, password, email, name);
  }

  @Get()
  getUser() {
    return this.userService.getUser();
  }
}
