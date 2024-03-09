import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(username, password, email, name: string): Promise<User> {
    const User = this.userRepository.create({
      username,
      password,
      email,
      name,
    });
    return this.userRepository.save(User);
  }

  async getUser(): Promise<User[]> {
    return this.userRepository.find();
  }
}
