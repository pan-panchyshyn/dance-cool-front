import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [MatSelectModule, BrowserAnimationsModule],
  exports: [MatSelectModule, BrowserAnimationsModule]
})
export class AppMaterialModule {}
