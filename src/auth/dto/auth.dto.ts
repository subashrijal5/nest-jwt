import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  name: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsStrongPassword()
  @IsString()
  password: string;
}
