import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestPageComponent } from './components/guest-page/guest-page.component';
import { GroupListComponent } from './components/group-admin/group-list/group-list.component';

const routes: Routes = [
  { path: '', component: GuestPageComponent },
  { path: 'groups', component: GroupListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
