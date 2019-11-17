import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { BaseWebService } from "../base.web-service";
import { SignInCredentials } from "../../models/Authentication/SignInCredentials";
import { AuthenticationWebService } from "./authentication.web-service";
import { Token } from "../../models/Authentication/Token";

@Injectable({
  providedIn: "root"
})
export class SignInWebService extends BaseWebService {
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationWebService
  ) {
    super();
  }

  public LogIn(credentials: SignInCredentials): Observable<Token> {
    const url = `${this.url}authorize`;
    return this.http.post<Token>(url, credentials, this.httpOptions).pipe(
      tap(
        (token: Token) => {
          this.authenticationService.token.next(token);
          this.authenticationService.SaveToLocalStorage(token);
        },
        error => console.error(error)
      )
    );
  }
}
