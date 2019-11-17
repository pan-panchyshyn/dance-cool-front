import { Component, OnInit } from "@angular/core";

import { SignInWebService } from "../../../web-services/authentication-web-services/sign-in.web-service";
import { SignInCredentials } from "../../../models/Authentication/SignInCredentials";
import { AuthenticationWebService } from "../../../web-services/authentication-web-services/authentication.web-service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  credentials: SignInCredentials = {
    email: "andrushchenko@mail.com",
    password: "LaLaLand"
  };
  constructor(
    private signInWebService: SignInWebService,
    private authenticationWebService: AuthenticationWebService
  ) {}

  ngOnInit() {}
  OnSignIn() {
    this.signInWebService.LogIn(this.credentials).subscribe(token => {
      this.authenticationWebService.token.next(token);
    });
  }
}
