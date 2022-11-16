import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProfileController } from './profile.controller';

@Module({
  // providers: [
  //   {
  //     provide: APP_GUARD,
  //     useClass: JwtAuthGuard,
  //   }
  // ],
  controllers: [ProfileController]
})
export class ProfileModule { }
