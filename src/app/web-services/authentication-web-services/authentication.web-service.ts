import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Token } from "../../models/Authentication/Token";
import { UserWebService } from "../user.web-service";
import { User } from "src/app/models/User";

@Injectable({
  providedIn: "root"
})
export class AuthenticationWebService {
  public token: BehaviorSubject<Token> = new BehaviorSubject<Token>(null);
  public authenticatedUser: BehaviorSubject<User> = new BehaviorSubject<User>(
    null
  );

  constructor(private userWebService: UserWebService) {}

  public SaveToLocalStorage(token: Token): void {
    const expirationDate = new Date().getTime() + token.tokenLifeTime;
    localStorage.setItem("expirationDate", expirationDate.toString());
    this.GetAuthenticatedUserByToken(token);
  }

  public GetAuthenticatedUserByToken(token: Token): void {
    this.userWebService.GetUserById(token.userId).subscribe(data => {
      const user = data;
      localStorage.setItem("authenticatedUser", JSON.stringify(user));
      this.authenticatedUser.next(user);
    });
  }

  CheckLogInState() {}

  LogOut(): void {
    this.authenticatedUser.next(null);
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("authenticatedUser");
  }
}
