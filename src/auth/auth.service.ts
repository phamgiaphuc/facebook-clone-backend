import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  authSignUp() {
    return "User sign up";
  }

  authSignIn() {
    return "User sign in";
  }
}
