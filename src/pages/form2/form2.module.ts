import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SearchSurveys} from './form2.page';
import { DynamicFormModule } from '../../common/forms/dynamic-form.module';
import { FormConfigService } from '../../services/form-config.service';

@NgModule({
	imports: [IonicModule, DynamicFormModule],
	declarations: [SearchSurveys],
	entryComponents: [SearchSurveys],
	providers: [FormConfigService]
})
export class Form2Module {

}
