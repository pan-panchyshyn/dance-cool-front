import { Component, OnInit } from '@angular/core';
import { SignInWebService } from '../../web-services/authentication-web-services/sign-in.web-service';
import { SignInCredentials } from '../../models/Authentication/SignInCredentials';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  // credentials: SignInCredentials = { email: '', password: '' };
  constructor(private signInWebService: SignInWebService) {}

  ngOnInit() {}
  // OnSignIn() {
  //   this.signInWebService.LogIn(this.credentials).subscribe(token => {
  //     this.signInWebService.authenticatedUser.next(token);
  //     const expirationTime = new Date().getTime() + authenticated.tokenLifeTime;
  //     console.log(this.signInWebService.authenticatedUser, expirationTime);
  //   });
  // }
}
