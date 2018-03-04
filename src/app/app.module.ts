import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { WordcountPipe} from "../pipes/wordcount/wordcount";

//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {PpagePage} from "../pages/ppage/ppage";
import {RpagePage} from "../pages/rpage/rpage";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PpagePage,
    RpagePage,
    WordcountPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PpagePage,
    RpagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
