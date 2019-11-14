import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AutenticationComponent } from './autentication/autentication.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthenticationMaterialModule } from './authentication-material.module';

@NgModule({
  declarations: [AutenticationComponent, LogInComponent, SignUpComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule,
    AuthenticationMaterialModule
  ]
})
export class AuthenticationModule {}
