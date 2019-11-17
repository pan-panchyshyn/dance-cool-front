import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatTabsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  exports: [MatTabsModule, MatFormFieldModule, MatInputModule, MatButtonModule]
})
export class AuthenticationMaterialModule {}
