import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from "@angular/common/http";

//Components
import { FootermenuComponent} from "../components/footermenu/footermenu";

//Pipes
import { WordcountPipe} from "../pipes/wordcount/wordcount";

//Providers & Services
import { SettingsProvider } from '../providers/settings/settings';
import { NewsApiService } from "../services/newsapi.service";

//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {PpagePage} from "../pages/ppage/ppage";
import {RpagePage} from "../pages/rpage/rpage";
import {JsonhttpPage} from "../pages/jsonhttp/jsonhttp";




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PpagePage,
    RpagePage,
    JsonhttpPage,
    WordcountPipe,
    FootermenuComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PpagePage,
    RpagePage,
    JsonhttpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
      NewsApiService,
      SettingsProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
