import { IsEmail, IsOptional, IsString, Length } from "class-validator";

export class RegisterDto {
  @IsString()
  name: string
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  @Length(6, 12, { message: "password must be between 6 and 12" })
  password: string;
  @IsOptional()
  @IsString()
  role:string
}
export class LoginDto {
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  @Length(6, 12, { message: "password must be between 6 and 12" })
  password: string;
} 