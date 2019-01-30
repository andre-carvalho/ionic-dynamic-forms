import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Config } from '../config';

import { ComponentsModule } from '../pages/components/components.module';
import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
import { HomeModule } from '../pages/home/home.module';
import { SlideBoxModule } from '../pages/slide-box/slide-box.module';
import { WordpressModule } from '../pages/wordpress/wordpress.module';
import { Form1Module } from '../pages/form1/form1.module';
import { Form2Module } from '../pages/form2/form2.module';
import { NewSurveyPageModule } from '../pages/new-survey/new-survey.module';
import { SearchSurveysPageModule } from '../pages/search-surveys/search-surveys.module';
import { ConfigPageModule } from '../pages/config/config.module';
import { MyApp } from './app.component';
import { StoreMidiaProvider } from '../providers/store-midia/store-midia';

@NgModule({
	declarations: [
		MyApp
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp),
		AgmCoreModule.forRoot(),

		ComponentsModule,
		GoogleMapsModule,
		HomeModule,
		SlideBoxModule,
		WordpressModule,
		Form1Module,
		Form2Module,
		NewSurveyPageModule,
		SearchSurveysPageModule,
		ConfigPageModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp
	],
	providers: [
		Config,
		StatusBar,
    StoreMidiaProvider
	]
})
export class AppModule {
}
