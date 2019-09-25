import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestPageComponent } from './components/guest-page/guest-page.component';
import { GroupAdminComponent } from './group-admin/group-admin.component';
import { GroupInfoComponent } from './group-admin/group-info/group-info.component';
import { AdminComponent } from './components/admin/admin.component';
import { AttendancePageComponent } from './attendance/attendance-page/attendance-page.component';

const routes: Routes = [
  { path: '', component: GuestPageComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'groups',
        component: GroupAdminComponent,
        children: [{ path: ':groupId', component: GroupInfoComponent }]
      },
      {
        path: 'attendances',
        component: AttendancePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
