import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { BaseWebService } from '../base.web-service';
import { AuthenticatedUser } from 'src/app/models/Authentication/AuthenticatedUser';
import { LogInCredentials } from 'src/app/models/Authentication/LogInCredentials';

@Injectable({
  providedIn: 'root'
})
export class LogInWebService extends BaseWebService {
  private authenticatedUser: BehaviorSubject<AuthenticatedUser>;
  constructor(private http: HttpClient) {
    super();
  }

  LogIn(credentials: LogInCredentials): Observable<AuthenticatedUser> {
    const url = `${this.url}authorize`;
    return this.http
      .post<AuthenticatedUser>(url, credentials, this.httpOptions)
      .pipe(tap(() => {}));
  }
}
