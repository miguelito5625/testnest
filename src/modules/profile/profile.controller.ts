import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('profile')
export class ProfileController {
    // @UseGuards(JwtAuthGuard)
    @Get()
    getProfile(@Request() req) {
      return req.user;
    }

    // @UseGuards(JwtAuthGuard)
    @Get('hello')
    hello(@Request() req) {
      return 'hello';
    }
}
