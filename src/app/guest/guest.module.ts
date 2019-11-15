import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestComponent } from './guest.component';
import { TittleGuestPageComponent } from './tittle-guest-page/tittle-guest-page.component';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [GuestComponent, TittleGuestPageComponent, ChatComponent],
  imports: [CommonModule, RouterModule, GuestRoutingModule],
  exports: [TittleGuestPageComponent]
})
export class GuestModule {}
