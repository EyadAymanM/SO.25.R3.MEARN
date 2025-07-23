import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  register(@Body() regiserUser: RegisterDto) {
    return this.authService.register(regiserUser)
  }

  @Post('login')
  login(@Body() loginUser: LoginDto) {
    return this.authService.login(loginUser)
  }
}
