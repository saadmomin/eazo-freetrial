import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignUpSelectPage } from './sign-up-select';

@NgModule({
  declarations: [
    SignUpSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpSelectPage),
  ],
})
export class SignUpSelectPageModule {}
