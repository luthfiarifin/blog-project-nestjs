import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from '../models/user.interface';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() user: User) {
    return this.userService.create(user);
  }

  @Get(':id')
  findOne(@Param() params) {
    return this.userService.findOne(params.id);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Delete(':id')
  deleteOne(@Param('id') id) {
    return this.userService.deleteOne(Number(id));
  }

  @Put(':id')
  updateOne(@Param('id') id, @Body() user: User) {
    return this.userService.updateOne(Number(id), user);
  }
}
