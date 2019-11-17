import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { AutenticationComponent } from "./autentication/autentication.component";
import { SignInComponent } from "./autentication/sign-in/sign-in.component";
import { SignUpComponent } from "./autentication/sign-up/sign-up.component";
import { AuthenticationMaterialModule } from "./authentication-material.module";

@NgModule({
  declarations: [AutenticationComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule,
    AuthenticationMaterialModule
  ]
})
export class AuthenticationModule {}
