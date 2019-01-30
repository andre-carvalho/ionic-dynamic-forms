import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SurveyModel} from './form1.page';
import { DynamicFormModule } from '../../common/forms/dynamic-form.module';
import { FormConfigService } from '../../services/form-config.service';

@NgModule({
	imports: [IonicModule, DynamicFormModule],
	declarations: [SurveyModel],
	entryComponents: [SurveyModel],
	providers: [FormConfigService]
})
export class Form1Module {

}
