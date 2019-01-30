import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchSurveysPage } from './search-surveys';

@NgModule({
  declarations: [
    SearchSurveysPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchSurveysPage),
  ],
})
export class SearchSurveysPageModule {}
