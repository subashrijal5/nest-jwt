import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import AuthModule from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user/user.controller';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PrismaModule,
    BookmarkModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [UserController],
})
export class AppModule {}
