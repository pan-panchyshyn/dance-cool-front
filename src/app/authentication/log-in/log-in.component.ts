import { Component, OnInit } from '@angular/core';
import { LogInWebService } from 'src/app/web-services/authentication-web-services/log-in.web-service';
import { LogInCredentials } from 'src/app/models/Authentication/LogInCredentials';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  credentials: LogInCredentials = { email: '', password: '' };
  constructor(private logInWebService: LogInWebService) {}

  ngOnInit() {}
  OnSignIn() {
    this.logInWebService
      .LogIn(this.credentials)
      .subscribe(() => console.log('Loged in'));
  }
}
