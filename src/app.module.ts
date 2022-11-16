import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './modules/cats/cats.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [CatsModule, AuthModule, UsersModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
