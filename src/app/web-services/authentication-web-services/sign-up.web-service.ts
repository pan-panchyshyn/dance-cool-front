import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { BaseWebService } from '../base.web-service';
import { AuthenticatedUser } from 'src/app/models/Authentication/AuthenticatedUser';
import { SignUpCredentials } from 'src/app/models/Authentication/SignUpCredentials';

@Injectable({
  providedIn: 'root'
})
export class SignUpWebService extends BaseWebService {
  public authenticatedUser: BehaviorSubject<
    AuthenticatedUser
  > = new BehaviorSubject<AuthenticatedUser>(null);
  constructor(private http: HttpClient) {
    super();
  }

  public SignUp(credentials: SignUpCredentials): Observable<AuthenticatedUser> {
    const url = `${this.url}register`;
    return this.http
      .post<AuthenticatedUser>(url, credentials, this.httpOptions)
      .pipe(
        tap((authenticatedUser: AuthenticatedUser) => {
          console.log(authenticatedUser);
        })
      );
  }
}