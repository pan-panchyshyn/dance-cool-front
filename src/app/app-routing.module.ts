import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestPageComponent } from './components/guest-page/guest-page.component';
import { GroupAdminComponent } from './components/group-admin/group-admin.component';

const routes: Routes = [
  { path: '', component: GuestPageComponent },
  { path: 'groups', component: GroupAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
