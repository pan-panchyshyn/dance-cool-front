import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AuthenticatedUser } from '../../models/Authentication/AuthenticatedUser';
import { Token } from '../../models/Authentication/Token';
import { UserWebService } from '../user.web-service';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationWebService {
  // public token: BehaviorSubject<Token> = new BehaviorSubject<Token>(null);
  // public authenticatedUser: BehaviorSubject<
  //   AuthenticatedUser
  // > = new BehaviorSubject<AuthenticatedUser>(null);
  // constructor(private userWebService: UserWebService) {}
  // public SaveToLocalStorage(token: Token): void {
  //   const authenticatedUser = this.GetAuthenticatedUserByToken(token);
  //   const expirationDate = new Date().getTime() + token.tokenLifeTime;
  //   console.log(authenticatedUser, expirationDate);
  //   // localStorage.setItem(
  //   //   'authenticatedUser',
  //   //   JSON.stringify(authenticatedUser)
  //   // );
  //   // localStorage.setItem('expirationDate', expirationDate.toString());
  // }
  // public GetAuthenticatedUserByToken(token: Token): AuthenticatedUser {
  //   let user: User;
  //   this.userWebService.GetUserById(token.userId).subscribe(data => {
  //     user = data;
  //   });
  //   const authenticatedUser: AuthenticatedUser = {
  //     accessToken: token.accessToken,
  //     tokenLifeTime: token.tokenLifeTime,
  //     authenticatedUser: user
  //   };
  //   return authenticatedUser;
  // }
}
