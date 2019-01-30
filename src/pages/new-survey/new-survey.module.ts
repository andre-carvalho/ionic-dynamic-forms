import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewSurveyPage } from './new-survey';

@NgModule({
  declarations: [
    NewSurveyPage,
  ],
  imports: [
    IonicPageModule.forChild(NewSurveyPage),
  ],
})
export class NewSurveyPageModule {}
