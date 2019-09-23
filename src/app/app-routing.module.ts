import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestPageComponent } from './components/guest-page/guest-page.component';
import { GroupAdminComponent } from './components/group-admin/group-admin.component';
import { GroupInfoComponent } from './components/group-admin/group-info/group-info.component';

const routes: Routes = [
  { path: '', component: GuestPageComponent },
  {
    path: 'groups',
    component: GroupAdminComponent,
    children: [{ path: ':groupId', component: GroupInfoComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
