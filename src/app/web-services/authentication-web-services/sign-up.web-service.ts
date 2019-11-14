import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseWebService } from '../base.web-service';
import { AuthenticatedUser } from 'src/app/models/Authentication/AuthenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class SignUpWebService extends BaseWebService {
  private authenticatedUser: BehaviorSubject<AuthenticatedUser>;
  constructor(private http: HttpClient) {
    super();
  }
}
