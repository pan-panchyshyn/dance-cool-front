import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Token } from "../../models/Authentication/Token";
import { UserWebService } from "../user.web-service";
import { User } from "../../models/User";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthenticationWebService {
  public token: BehaviorSubject<Token> = new BehaviorSubject<Token>(null);
  public authenticatedUser: BehaviorSubject<User> = new BehaviorSubject<User>(
    null
  );

  constructor(
    private userWebService: UserWebService,
    private http: HttpClient
  ) {}

  public SaveToLocalStorage(token: Token): void {
    const expirationDate = new Date(new Date().getTime() + token.tokenLifeTime);
    console.log(expirationDate);
    localStorage.setItem("expirationDate", expirationDate.toString());
    localStorage.setItem("token", JSON.stringify(this.token.value));
    this.GetAuthenticatedUserByToken(token);
  }

  public GetAuthenticatedUserByToken(token: Token): void {
    this.userWebService.GetUserById(token.userId).subscribe(data => {
      const user = data;
      localStorage.setItem("authenticatedUser", JSON.stringify(user));
      this.authenticatedUser.next(user);
    });
  }

  CheckLogInState() {
    const expDate = new Date(localStorage.getItem("expirationDate"));
    console.log(expDate);
    if (expDate > new Date()) {
      this.token.next(JSON.parse(localStorage.getItem("token")));
      this.authenticatedUser.next(
        JSON.parse(localStorage.getItem("authenticatedUser"))
      );
    } else {
      this.LogOut();
    }
  }

  LogOut(): void {
    const userId = this.token.value.userId;
    this.http
      .get(`${environment.apiUrl}api/log-out/${userId}`)
      .subscribe(data => console.log(`user has logged out on front`));
    this.authenticatedUser.next(null);
    this.token.next(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("authenticatedUser");
  }
}
