import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendancePageComponent } from './attendance-page/attendance-page.component';
import { LessonService } from './services/lesson-sync.service';
import { AttendanceService } from './services/attendance-sync.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AttendancePageComponent],
  imports: [CommonModule, FormsModule],
  exports: [AttendancePageComponent],
  providers: [LessonService, AttendanceService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AttendanceModule {}
