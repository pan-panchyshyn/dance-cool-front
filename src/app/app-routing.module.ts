import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestPageComponent } from './components/guest-page/guest-page.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: '', component: GuestPageComponent, pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'groups',
        loadChildren: () =>
          import('./group-admin/group-admin.module').then(
            m => m.GroupAdminModule
          )
      },
      {
        path: 'attendances',
        loadChildren: () =>
          import('./attendance/attendance.module').then(
            module => module.AttendanceModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
