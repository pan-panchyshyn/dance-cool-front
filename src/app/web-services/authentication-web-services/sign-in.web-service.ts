import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { BaseWebService } from '../base.web-service';
import { AuthenticatedUser } from 'src/app/models/Authentication/AuthenticatedUser';
import { SignInCredentials } from 'src/app/models/Authentication/SignInCredentials';

@Injectable({
  providedIn: 'root'
})
export class SignInWebService extends BaseWebService {
  public authenticatedUser: BehaviorSubject<
    AuthenticatedUser
  > = new BehaviorSubject<AuthenticatedUser>(null);
  constructor(private http: HttpClient) {
    super();
  }

  public LogIn(credentials: SignInCredentials): Observable<AuthenticatedUser> {
    const url = `${this.url}authorize`;
    return this.http
      .post<AuthenticatedUser>(url, credentials, this.httpOptions)
      .pipe(
        tap((authenticated: AuthenticatedUser) => {
          console.log(authenticated);
        })
      );
  }

  private SaveToLocalStorage(authentionData: AuthenticatedUser): void {
    const expirationDate = new Date().getTime() + authentionData.tokenLifeTime;
  }
}
