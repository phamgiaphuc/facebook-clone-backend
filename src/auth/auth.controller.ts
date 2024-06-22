import { AuthService } from "@/auth/auth.service";
import { Controller, Post } from "@nestjs/common";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  authSignUp() {
    return this.authService.authSignUp();
  }

  @Post("signin")
  authSignIn() {
    return this.authService.authSignIn();
  }
}
