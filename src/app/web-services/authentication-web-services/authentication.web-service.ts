import { Injectable } from '@angular/core';
import { AuthenticatedUser } from 'src/app/models/Authentication/AuthenticatedUser';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationWebService {
  constructor() {}
  public TokenToAuthUser(tokne: Token): AuthenticatedUser {
    return;
  }
}
