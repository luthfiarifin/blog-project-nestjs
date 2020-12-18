import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import { User } from '../models/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  create(user: User) {
    return this.userRepository.save(user);
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  findAll() {
    return this.userRepository.find();
  }

  deleteOne(id: number) {
    return this.userRepository.delete(id);
  }

  updateOne(id: number, user: User) {
    return this.userRepository.update(id, user);
  }
}
