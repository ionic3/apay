import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupStepOnePage } from './signup-step-one';

@NgModule({
  declarations: [
    SignupStepOnePage,
  ],
  imports: [
    IonicPageModule.forChild(SignupStepOnePage),
  ],
})
export class SignupStepOnePageModule {}
