import { AuthService } from '@/auth/auth.service';
import { AuthDTO } from '@/auth/dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  authSignUp(@Body() body: AuthDTO) {
    console.log(body);
    return this.authService.authSignUp();
  }

  @Post('signin')
  authSignIn() {
    return this.authService.authSignIn();
  }
}
