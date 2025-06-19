import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateAuthDto {
  @IsOptional()
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  age?: number;

  @IsOptional()
  @IsEnum(['admin', 'user'])
  role?: 'admin' | 'user';
}

