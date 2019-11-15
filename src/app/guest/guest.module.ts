import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestComponent } from './guest.component';
import { TittleGuestPageComponent } from './tittle-guest-page/tittle-guest-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GuestComponent, TittleGuestPageComponent],
  imports: [CommonModule, RouterModule, GuestRoutingModule],
  exports: [TittleGuestPageComponent]
})
export class GuestModule {}