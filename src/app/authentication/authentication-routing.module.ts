import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticationComponent } from './autentication/autentication.component';

const routes: Routes = [{ path: '', component: AutenticationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
