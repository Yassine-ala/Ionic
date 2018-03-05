import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JsonhttpPage } from './jsonhttp';

@NgModule({
  declarations: [
    JsonhttpPage,
  ],
  imports: [
    IonicPageModule.forChild(JsonhttpPage),
  ],
})
export class JsonhttpPageModule {}
