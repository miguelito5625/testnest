import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Module({
  providers: [
    UsersService
  ],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
