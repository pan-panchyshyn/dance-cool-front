import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendancePageComponent } from './attendance-page/attendance-page.component';

const routes: Routes = [
  {
    path: '',
    component: AttendancePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule {}
