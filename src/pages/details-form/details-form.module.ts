import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsFormPage } from './details-form';

@NgModule({
  declarations: [
    DetailsFormPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsFormPage),
  ],
})
export class DetailsFormPageModule {}
