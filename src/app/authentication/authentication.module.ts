import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AutenticationComponent } from './autentication/autentication.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthenticationMaterialModule } from './authentication-material.module';

@NgModule({
  declarations: [AutenticationComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    AuthenticationMaterialModule
  ]
})
export class AuthenticationModule {}
