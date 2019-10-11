import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./guest/guest.module').then(module => module.GuestModule)
  },
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
