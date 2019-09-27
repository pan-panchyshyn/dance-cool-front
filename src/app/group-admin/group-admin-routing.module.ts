import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupAdminComponent } from './group-admin.component';
import { GroupInfoComponent } from './group-info/group-info.component';

const routes: Routes = [
  {
    path: '',
    component: GroupAdminComponent,
    children: [{ path: ':groupId', component: GroupInfoComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupAdminRoutingModule {}
