import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { AuthenticatedUser } from "../../models/Authentication/AuthenticatedUser";
import { Token } from "../../models/Authentication/Token";
import { UserWebService } from "../user.web-service";

@Injectable({
  providedIn: "root"
})
export class AuthenticationWebService {
  public token: BehaviorSubject<Token> = new BehaviorSubject<Token>(null);
  public authenticatedUser: BehaviorSubject<
    AuthenticatedUser
  > = new BehaviorSubject<AuthenticatedUser>(null);

  constructor(private userWebService: UserWebService) {}

  public SaveToLocalStorage(token: Token): void {
    const expirationDate = new Date().getTime() + token.tokenLifeTime;
    localStorage.setItem("expirationDate", expirationDate.toString());
    this.GetAuthenticatedUserByToken(token);
  }

  public GetAuthenticatedUserByToken(token: Token): void {
    this.userWebService.GetUserById(token.userId).subscribe(data => {
      const user: AuthenticatedUser = {
        accessToken: token.accessToken,
        tokenLifeTime: token.tokenLifeTime,
        authenticatedUser: data
      };
      this.authenticatedUser.next(user);
      localStorage.setItem("authenticatedUser", JSON.stringify(user));
    });
  }
}
