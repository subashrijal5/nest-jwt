import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStreategy } from './streategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStreategy],
  imports: [
    JwtModule.register({
      secret: 'XXXXXX',
    }),
  ],
})
class AuthModule {}
export default AuthModule;
