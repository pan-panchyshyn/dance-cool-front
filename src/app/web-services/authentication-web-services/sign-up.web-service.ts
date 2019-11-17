import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { BaseWebService } from "../base.web-service";
import { AuthenticatedUser } from "src/app/models/Authentication/AuthenticatedUser";
import { SignUpCredentials } from "src/app/models/Authentication/SignUpCredentials";
import { Token } from "src/app/models/Authentication/Token";
import { AuthenticationWebService } from "./authentication.web-service";

@Injectable({
  providedIn: "root"
})
export class SignUpWebService extends BaseWebService {
  public authenticatedUser: BehaviorSubject<
    AuthenticatedUser
  > = new BehaviorSubject<AuthenticatedUser>(null);
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationWebService
  ) {
    super();
  }

  public SignUp(credentials: SignUpCredentials): Observable<Token> {
    const url = `${this.url}register`;
    return this.http.post<Token>(url, credentials, this.httpOptions).pipe(
      tap(
        (token: Token) => {
          this.authenticationService.SaveToLocalStorage(token);
        },
        error => console.error(error)
      )
    );
  }
}
