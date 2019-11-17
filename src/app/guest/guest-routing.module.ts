import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TittleGuestPageComponent } from './tittle-guest-page/tittle-guest-page.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', component: TittleGuestPageComponent },
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule {}
