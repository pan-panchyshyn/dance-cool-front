import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticationComponent } from './autentication/autentication.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: AutenticationComponent,
    children: [
      { path: 'sign-in', component: LogInComponent },
      { path: 'sign-up', component: SignUpComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
