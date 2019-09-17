import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestPageComponent } from './components/guest-page/guest-page.component';
import { GroupPageComponent } from './components/group-page/group-page.component';

const routes: Routes = [
  { path: '', component: GuestPageComponent },
  { path: 'groups', component: GroupPageComponent },
  { path: 'group/:groupId', component: GroupPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
